// 塔罗牌的类型定义

export interface TarotCard {
  id: number;
  name: string;
  englishName: string;
  number: string;
  arcana: 'major' | 'minor';
  suit?: 'wands' | 'cups' | 'swords' | 'pentacles';
  meaning: {
    upright: string[];
    reversed: string[];
  };
  description: string;
  symbolism: string;
  guidance: string;
  affirmation: string;
  keywords: string[];
  numerology?: number;
  element?: string;
  planetary?: string;
  astrology?: string;
  image?: string;
}

export interface SpreadType {
  id: string;
  name: string;
  description: string;
  positions: SpreadPosition[];
  type: 'simple' | 'relationship' | 'career' | 'guidance' | 'complex';
  icon: string;
}

export interface SpreadPosition {
  id: string;
  name: string;
  meaning: string;
  index: number;
}

export interface DrawnCard {
  card: TarotCard;
  position: SpreadPosition;
  reversed: boolean;
  index: number;
}

export interface DivinationReading {
  id: string;
  spreadType: SpreadType;
  drawnCards: DrawnCard[];
  reading: ReadingInterpretation;
  timestamp: Date;
  shareToken?: string;
}

export interface ReadingInterpretation {
  cardReadings: CardInterpretation[];
  combinedReading: string;
  guidance: string;
  affirmation: string;
  actionSteps: string[];
}

export interface CardInterpretation {
  card: TarotCard;
  position: SpreadPosition;
  meaning: string;
  relationship?: string; // 与其他牌的关系
}
