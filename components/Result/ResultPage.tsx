'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MysticalLayout } from '@/components/Layout/MysticalLayout';
import { MysticalButton } from '@/components/Button/MysticalButton';
import { TarotCardComponent } from '@/components/Card/TarotCard';
import { Modal } from '@/components/Modal/Modal';
import { TarotReader } from '@/lib/tarot-reader';
import { PDFExporter } from '@/lib/pdf-exporter';
import { SoundManager } from '@/lib/sound-manager';
import { generateShareToken, formatDate } from '@/lib/utils';
import Link from 'next/link';

interface ResultPageProps {
  spreadType: string;
  cards: any[];
  interpretation: string;
}

export function ResultPage({ spreadType, cards, interpretation }: ResultPageProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareToken, setShareToken] = useState('');
  const resultRef = useRef<HTMLDivElement>(null);

  const handleExportPDF = async () => {
    if (!resultRef.current) return;
    
    setIsExporting(true);
    try {
      await PDFExporter.exportFromElement(
        resultRef.current,
        `Entelecheia-${new Date().getTime()}.pdf`
      );
      SoundManager.playSuccessSound();
    } catch (error) {
      console.error('导出失败:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const handleShare = () => {
    const token = generateShareToken();
    setShareToken(token);
    setShowShareModal(true);
  };

  const shareUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/share/${shareToken}`
    : '';

  return (
    <MysticalLayout>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* 标题 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-mystical-gold mb-4">
              ✨ 占卜结果 ✨
            </h1>
            <p className="text-mystical-light/70 text-sm">
              {formatDate(new Date())}
            </p>
          </motion.div>

          {/* 结果卡片 */}
          <motion.div
            ref={resultRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gradient-to-b from-mystical-dark/60 via-mystical-purple/40 to-mystical-darker/60 rounded-xl border-2 border-mystical-gold/50 backdrop-blur-sm p-8 mb-8"
          >
            {/* 卡牌展示 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-mystical-gold mb-6 text-center">
                {spreadType}
              </h2>
              <div className="flex flex-wrap gap-6 justify-center">
                {cards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <TarotCardComponent
                      card={card}
                      reversed={card.reversed}
                      size="sm"
                      showDetails
                    />
                    <p className="text-mystical-light/70 text-xs mt-2 max-w-24">
                      {card.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 分割线 */}
            <div className="border-t border-mystical-gold/20 my-8" />

            {/* 解读内容 */}
            <div>
              <h3 className="text-xl font-bold text-mystical-gold mb-6">
                📖 详细解读
              </h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-mystical-light/80 leading-relaxed whitespace-pre-wrap text-sm md:text-base">
                  {interpretation}
                </p>
              </div>
            </div>

            {/* 建议与行动 */}
            <div className="mt-8 p-6 rounded-lg bg-mystical-gold/10 border border-mystical-gold/30">
              <h4 className="text-lg font-bold text-mystical-gold mb-4">
                💫 行动建议
              </h4>
              <ul className="space-y-3 text-mystical-light/70 text-sm">
                {[
                  '冥想与反思：在安静的环境中思考这些牌的含义',
                  '日记记录：将你的感受写下来，观察后续的发展',
                  '积极行动：带着这些洞察，采取具体的行动',
                  '保持开放：让宇宙指引你向着最高的善发展',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-mystical-gold flex-shrink-0 mt-1">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* 肯定语 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center p-6 rounded-lg border-2 border-mystical-gold/50 bg-mystical-dark/40 mb-8"
          >
            <p className="text-mystical-gold italic text-lg">
              "相信你的直觉，宇宙正在指引你走向最好的未来。"
            </p>
          </motion.div>

          {/* 操作按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <MysticalButton
              variant="primary"
              size="md"
              onClick={handleExportPDF}
              disabled={isExporting}
            >
              {isExporting ? '导出中...' : '📥 导出为PDF'}
            </MysticalButton>
            <MysticalButton
              variant="secondary"
              size="md"
              onClick={handleShare}
            >
              🔗 分享结果
            </MysticalButton>
            <Link href="/divination">
              <MysticalButton variant="ghost" size="md">
                🔮 再占一次
              </MysticalButton>
            </Link>
          </motion.div>

          {/* 返回首页 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <Link href="/">
              <span className="text-mystical-gold hover:text-yellow-300 transition-colors text-sm cursor-pointer">
                ← 返回首页
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* 分享模态框 */}
      <Modal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        title="分享你的占卜结果"
      >
        <div className="space-y-4">
          <p className="text-mystical-light/80 text-sm">
            将以下链接分享给朋友，让他们看到你的占卜结果：
          </p>

          {/* 分享链接 */}
          <div className="p-3 bg-mystical-dark/50 rounded-lg border border-mystical-gold/30">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="w-full bg-transparent text-mystical-gold text-xs focus:outline-none"
            />
          </div>

          {/* 复制按钮 */}
          <MysticalButton
            variant="secondary"
            size="sm"
            onClick={() => {
              navigator.clipboard.writeText(shareUrl);
              alert('链接已复制！');
            }}
            className="w-full"
          >
            📋 复制链接
          </MysticalButton>

          {/* 社交分享 */}
          <div className="pt-4 border-t border-mystical-gold/20">
            <p className="text-mystical-light/70 text-xs mb-3">分享到：</p>
            <div className="flex gap-3 justify-center">
              <button className="w-10 h-10 rounded-full bg-mystical-gold/20 hover:bg-mystical-gold/30 transition-colors flex items-center justify-center text-mystical-gold">
                f
              </button>
              <button className="w-10 h-10 rounded-full bg-mystical-gold/20 hover:bg-mystical-gold/30 transition-colors flex items-center justify-center text-mystical-gold">
                𝕏
              </button>
              <button className="w-10 h-10 rounded-full bg-mystical-gold/20 hover:bg-mystical-gold/30 transition-colors flex items-center justify-center text-mystical-gold">
                ✉
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </MysticalLayout>
  );
}
