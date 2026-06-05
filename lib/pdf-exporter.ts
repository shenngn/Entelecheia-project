import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { DivinationReading } from '@/lib/types';
import { formatDate } from '@/lib/utils';

/**
 * PDF导出系统
 */
export class PDFExporter {
  /**
   * 从HTML元素生成PDF
   */
  static async exportFromElement(
    element: HTMLElement,
    filename: string
  ): Promise<void> {
    try {
      // 转换为Canvas
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: '#050A15',
        logging: false,
      });

      const imgWidth = 210; // A4宽度
      const pageHeight = 297; // A4高度
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      const pdf = new jsPDF('p', 'mm', 'a4');
      let position = 0;

      // 添加图片到PDF
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(filename);
    } catch (error) {
      console.error('PDF导出失败:', error);
      throw new Error('PDF导出失败，请重试');
    }
  }

  /**
   * 创建占卜报告PDF
   */
  static async createDivinationReport(
    reading: DivinationReading,
    interpretation: string
  ): Promise<void> {
    const pdf = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
    });

    // 设置字体
    pdf.setFont('SimSun');

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 15;
    let yPosition = margin;

    // 标题
    pdf.setFontSize(24);
    pdf.setTextColor(212, 175, 55); // 金色
    pdf.text('✨ Entelecheia 塔罗占卜报告 ✨', pageWidth / 2, yPosition, {
      align: 'center',
    });

    yPosition += 15;

    // 牌阵信息
    pdf.setFontSize(12);
    pdf.setTextColor(232, 232, 232); // 浅色
    pdf.text(`牌阵：${reading.spreadType.name}`, margin, yPosition);
    yPosition += 7;
    pdf.text(`时间：${formatDate(reading.timestamp)}`, margin, yPosition);

    yPosition += 15;

    // 分割线
    pdf.setDrawColor(212, 175, 55, 0.3);
    pdf.line(margin, yPosition, pageWidth - margin, yPosition);

    yPosition += 10;

    // 占卜结果
    pdf.setFontSize(14);
    pdf.setTextColor(212, 175, 55);
    pdf.text('占卜结果', margin, yPosition);

    yPosition += 10;

    // 卡牌信息
    pdf.setFontSize(11);
    pdf.setTextColor(232, 232, 232);

    reading.drawnCards.forEach((card, index) => {
      const position = reading.spreadType.positions[index]?.name || `卡牌 ${index + 1}`;
      pdf.text(
        `${position}：${card.card.name} ${card.reversed ? '(逆位)' : '(正位)'}`,
        margin,
        yPosition
      );
      yPosition += 6;

      if (yPosition > pageHeight - margin - 10) {
        pdf.addPage();
        yPosition = margin;
      }
    });

    yPosition += 10;

    // 解读
    pdf.setFontSize(14);
    pdf.setTextColor(212, 175, 55);
    pdf.text('详细解读', margin, yPosition);

    yPosition += 10;

    pdf.setFontSize(10);
    pdf.setTextColor(232, 232, 232);

    const interpretationLines = pdf.splitTextToSize(
      interpretation,
      pageWidth - margin * 2
    );

    interpretationLines.forEach((line: string) => {
      if (yPosition > pageHeight - margin - 10) {
        pdf.addPage();
        yPosition = margin;
      }
      pdf.text(line, margin, yPosition);
      yPosition += 6;
    });

    yPosition += 15;

    // 页脚
    pdf.setFontSize(9);
    pdf.setTextColor(150, 150, 150);
    pdf.text(
      '© 2026 Entelecheia. 探索命运的秘密 ✨',
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    );

    pdf.save(
      `Entelecheia-${reading.spreadType.name}-${new Date().getTime()}.pdf`
    );
  }
}
