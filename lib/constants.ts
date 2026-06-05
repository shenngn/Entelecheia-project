// 常量定义

export const MAJOR_ARCANA = [
  { id: 0, name: '愚人', englishName: 'The Fool' },
  { id: 1, name: '魔术师', englishName: 'The Magician' },
  { id: 2, name: '女祭司', englishName: 'The High Priestess' },
  { id: 3, name: '皇后', englishName: 'The Empress' },
  { id: 4, name: '皇帝', englishName: 'The Emperor' },
  { id: 5, name: '教皇', englishName: 'The Hierophant' },
  { id: 6, name: '恋人', englishName: 'The Lovers' },
  { id: 7, name: '战车', englishName: 'The Chariot' },
  { id: 8, name: '力量', englishName: 'Strength' },
  { id: 9, name: '隐士', englishName: 'The Hermit' },
  { id: 10, name: '命运之轮', englishName: 'Wheel of Fortune' },
  { id: 11, name: '正义', englishName: 'Justice' },
  { id: 12, name: '倒吊人', englishName: 'The Hanged Man' },
  { id: 13, name: '死神', englishName: 'Death' },
  { id: 14, name: '节制', englishName: 'Temperance' },
  { id: 15, name: '恶魔', englishName: 'The Devil' },
  { id: 16, name: '高塔', englishName: 'The Tower' },
  { id: 17, name: '星星', englishName: 'The Star' },
  { id: 18, name: '月亮', englishName: 'The Moon' },
  { id: 19, name: '太阳', englishName: 'The Sun' },
  { id: 20, name: '审判', englishName: 'Judgement' },
  { id: 21, name: '世界', englishName: 'The World' },
];

export const SPREADS = [
  {
    id: 'single',
    name: '单张指引牌',
    description: '寻求当下的指引和建议',
    type: 'guidance',
    icon: '🎯',
  },
  {
    id: 'three-card',
    name: '三牌阵',
    description: '过去、现在、未来的全面解析',
    type: 'simple',
    icon: '📖',
  },
  {
    id: 'love',
    name: '爱情阵',
    description: '感情关系的深度探索',
    type: 'relationship',
    icon: '💕',
  },
  {
    id: 'career',
    name: '事业阵',
    description: '工作发展和职业建议',
    type: 'career',
    icon: '💼',
  },
  {
    id: 'celtic-cross',
    name: '凯尔特十字阵',
    description: '最深层的问题分析',
    type: 'complex',
    icon: '✨',
  },
  {
    id: 'daily',
    name: '每日运势牌',
    description: '今日的能量和指引',
    type: 'simple',
    icon: '🌟',
  },
];

export const COLORS = {
  primary: '#D4AF37',      // 金色
  dark: '#0F1729',         // 深蓝
  darker: '#050A15',       // 更深的蓝
  light: '#E8E8E8',        // 月白
  purple: '#6B46C1',       // 紫色
  blue: '#1E40AF',         // 蓝色
};

export const ANIMATION_DURATION = {
  fast: 300,
  normal: 600,
  slow: 1000,
};
