'use client';

import { motion } from 'framer-motion';
import { MysticalLayout } from '@/components/Layout/MysticalLayout';
import { MysticalButton } from '@/components/Button/MysticalButton';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const features = [
  {
    icon: '🔮',
    title: '经典牌阵',
    description: '选择多种牌阵进行占卜，从单张指引到凯尔特十字。',
  },
  {
    icon: '✨',
    title: '沉浸式体验',
    description: '仪式感的洗牌、翻牌动画和音效，让占卜更真实。',
  },
  {
    icon: '📖',
    title: '深度解读',
    description: '不仅仅是牌义，包含组合分析和个性化建议。',
  },
  {
    icon: '💫',
    title: '能量共鸣',
    description: '与塔罗的深层联系，寻找内心的指引。',
  },
];

export default function Home() {
  return (
    <MysticalLayout>
      {/* 英雄区域 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col items-center justify-center px-4"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-2xl"
        >
          {/* 标题 */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.h1
              className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-mystical-gold via-yellow-300 to-mystical-gold bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✨ Entelecheia ✨
            </motion.h1>
            <p className="text-mystical-light text-lg md:text-xl opacity-90">
              探索命运的秘密
            </p>
          </motion.div>

          {/* 副标题 */}
          <motion.p
            variants={itemVariants}
            className="text-mystical-light/80 text-lg md:text-xl mb-12 leading-relaxed"
          >
            进入一个专业的塔罗占卜世界。在星空的见证下，与塔罗的智慧相连，获得生活的指引与启蒙。
          </motion.p>

          {/* CTA 按钮 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link href="/divination">
              <MysticalButton variant="primary" size="lg">
                🔮 开始占卜
              </MysticalButton>
            </Link>
            <MysticalButton variant="secondary" size="lg">
              📖 了解塔罗
            </MysticalButton>
          </motion.div>

          {/* 功能展示 */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                className="p-6 rounded-lg bg-mystical-dark/40 border border-mystical-gold/30 backdrop-blur-sm hover:border-mystical-gold/60 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold text-mystical-gold mb-2">
                  {feature.title}
                </h3>
                <p className="text-mystical-light/70 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 页脚 */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="py-8 text-center text-mystical-light/50 text-sm border-t border-mystical-gold/10"
      >
        <p>© 2026 Entelecheia. 探索命运的秘密 ✨</p>
      </motion.footer>
    </MysticalLayout>
  );
}
