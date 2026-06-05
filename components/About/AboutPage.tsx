'use client';

import { motion } from 'framer-motion';
import { MysticalLayout } from '@/components/Layout/MysticalLayout';
import { MysticalButton } from '@/components/Button/MysticalButton';
import Link from 'next/link';

const tarotInfo = [
  {
    title: '什么是塔罗？',
    description: '塔罗是一种古老的占卜工具，有78张牌构成，分为大阿卡纳（22张）和小阿卡纳（56张）。每张牌都有其独特的象征意义和解释。',
    icon: '🔮',
  },
  {
    title: '牌的含义',
    description: '每张牌都可以正位或逆位出现，正位和逆位有不同的含义。牌的意义会根据提问的问题和周围的牌而变化。',
    icon: '📖',
  },
  {
    title: '如何使用',
    description: '在进行占卜前，保持平静的心态，专注于你的问题。选择一个牌阵，然后依次抽牌。信任你的直觉，理解每张牌对你的意义。',
    icon: '✨',
  },
  {
    title: '科学视角',
    description: '塔罗不是预测未来的科学工具，而是一种自我反思和心理投射的方式。它帮助你探索内心，获得新的视角。',
    icon: '🧠',
  },
];

const spreads = [
  {
    name: '单张指引牌',
    cards: 1,
    description: '最简单的牌阵，适合日常指引和快速答案',
  },
  {
    name: '三牌阵',
    cards: 3,
    description: '展示过去、现在、未来的完整故事线',
  },
  {
    name: '爱情牌阵',
    cards: 5,
    description: '深入探索感情关系的各个方面',
  },
  {
    name: '事业牌阵',
    cards: 5,
    description: '分析职业发展和工作挑战',
  },
  {
    name: '凯尔特十字',
    cards: 10,
    description: '最复杂的牌阵，提供最深层的洞察',
  },
];

export function AboutPage() {
  return (
    <MysticalLayout>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* 标题 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-mystical-gold mb-4">
              了解塔罗
            </h1>
            <p className="text-mystical-light/70 text-lg">
              探索这个古老的智慧系统
            </p>
          </motion.div>

          {/* 塔罗信息 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          >
            {tarotInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg bg-mystical-dark/40 border border-mystical-gold/30 backdrop-blur-sm hover:border-mystical-gold/60 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-mystical-gold mb-3">
                  {item.title}
                </h3>
                <p className="text-mystical-light/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* 牌阵介绍 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-mystical-gold mb-8 text-center">
              可用的牌阵
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              {spreads.map((spread, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="p-4 rounded-lg bg-mystical-purple/20 border border-mystical-gold/30 hover:bg-mystical-purple/30 transition-colors"
                >
                  <h4 className="font-bold text-mystical-gold mb-2">
                    {spread.name}
                  </h4>
                  <p className="text-mystical-light/70 text-sm mb-2">
                    {spread.description}
                  </p>
                  <p className="text-mystical-gold/70 text-xs">
                    {spread.cards} 张牌
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Link href="/divination">
              <MysticalButton variant="primary" size="lg">
                🔮 开始占卜之旅
              </MysticalButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </MysticalLayout>
  );
}
