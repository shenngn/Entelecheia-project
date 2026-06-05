import { TarotCard, DrawnCard, SpreadType } from '@/lib/types';

/**
 * AI解读系统 - 生成深度的塔罗解读
 */
export class TarotReader {
  /**
   * 生成单张牌的解释
   */
  static getSingleCardReading(card: TarotCard, reversed: boolean): string {
    const meanings = reversed ? card.meaning.reversed : card.meaning.upright;
    const primary = meanings[0];
    const secondary = meanings[1];

    const position = reversed ? '逆位' : '正位';
    const reading = `
    【${card.name} - ${position}】
    
    这张牌代表${primary}的能量。在你的处境中，它象征着${secondary}。
    
    关键词：${card.keywords.join('、')}
    
    建议：${card.guidance}
    `;

    return reading.trim();
  }

  /**
   * 生成三牌阵解读（过去、现在、未来）
   */
  static getThreeCardReading(cards: DrawnCard[]): string {
    if (cards.length !== 3) return '';

    const [past, present, future] = cards;

    const reading = `
    【过去】
    ${this.getSingleCardReading(past.card, past.reversed)}
    
    【现在】
    ${this.getSingleCardReading(present.card, present.reversed)}
    
    【未来】
    ${this.getSingleCardReading(future.card, future.reversed)}
    
    【整体解读】
    您的过去由${past.card.name}塑造，这表明您已经经历了${past.card.meaning.upright[0]}的阶段。
    现在，${present.card.name}的能量主导您的生活，暗示${present.card.meaning.upright[0]}的重要性。
    展望未来，${future.card.name}预示着${future.card.meaning.upright[0]}的可能性。
    
    这个序列表明您正在经历从${past.card.name}到${future.card.name}的转变过程。
    `;

    return reading.trim();
  }

  /**
   * 生成爱情牌阵解读
   */
  static getLoveReading(cards: DrawnCard[]): string {
    if (cards.length < 3) return '';

    const positions = ['你对关系的感受', '对方对关系的感受', '关系的未来'];

    let reading = '【爱情占卜】\n\n';

    cards.forEach((card, index) => {
      if (index < 3) {
        reading += `【${positions[index]}】\n`;
        reading += this.getSingleCardReading(card.card, card.reversed);
        reading += '\n\n';
      }
    });

    reading += `
    【关系建议】
    根据这些牌的组合，您的关系呈现出${cards[2].card.name}的前景。
    建议您保持${cards[0].card.keywords[0]}的心态，同时理解对方的${cards[1].card.keywords[0]}。
    通过${cards[0].card.guidance}，您可以在关系中走向${cards[2].card.guidance}。
    `;

    return reading.trim();
  }

  /**
   * 生成事业牌阵解读
   */
  static getCareerReading(cards: DrawnCard[]): string {
    if (cards.length < 3) return '';

    let reading = '【事业占卜】\n\n';
    const positions = ['当前工作状况', '挑战与机遇', '事业前景'];

    cards.forEach((card, index) => {
      if (index < 3) {
        reading += `【${positions[index]}】\n`;
        reading += this.getSingleCardReading(card.card, card.reversed);
        reading += '\n\n';
      }
    });

    reading += `
    【职业建议】
    目前${cards[0].card.meaning.upright[0]}是您事业的核心状态。
    您需要面对的挑战是${cards[1].card.meaning.upright[0]}。
    长期来看，${cards[2].card.meaning.upright[0]}将是您的目标方向。
    建议采取行动：${cards[0].card.guidance}
    `;

    return reading.trim();
  }

  /**
   * 生成每日运势
   */
  static getDailyGuidance(cards: DrawnCard[]): string {
    if (cards.length === 0) return '';

    const card = cards[0];
    const affirmation = card.card.affirmation;

    const reading = `
    【今日运势指引】
    
    主题牌：${card.card.name}
    
    ${this.getSingleCardReading(card.card, card.reversed)}
    
    【今日肯定语】
    ${affirmation}
    
    【今日建议】
    带着${card.card.keywords[0]}的心态迎接今天。${card.card.guidance}
    `;

    return reading.trim();
  }

  /**
   * 提取关键建议
   */
  static extractActionSteps(cards: DrawnCard[]): string[] {
    const steps: string[] = [];

    cards.forEach((card) => {
      if (card.card.guidance) {
        steps.push(card.card.guidance);
      }
    });

    return steps;
  }
}
