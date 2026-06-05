'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MysticalLayout } from '@/components/Layout/MysticalLayout';
import { MysticalButton } from '@/components/Button/MysticalButton';
import Link from 'next/link';

interface SharedReading {
  spreadType: string;
  cards: any[];
  interpretation: string;
  timestamp: string;
}

export default function SharePage({ params }: { params: { token: string } }) {
  const [reading, setReading] = useState<SharedReading | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: 从API获取分享的占卜结果
    setLoading(false);
  }, [params.token]);

  if (loading) {
    return (
      <MysticalLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-4">🔮</div>
            <p className="text-mystical-light/70">正在加载...</p>
          </div>
        </div>
      </MysticalLayout>
    );
  }

  if (!reading) {
    return (
      <MysticalLayout>
        <div className="min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="text-6xl mb-4">❌</div>
            <p className="text-mystical-light/70 text-lg mb-6">
              找不到这个占卜结果
            </p>
            <Link href="/">
              <MysticalButton variant="primary" size="md">
                返回首页
              </MysticalButton>
            </Link>
          </motion.div>
        </div>
      </MysticalLayout>
    );
  }

  return (
    <MysticalLayout>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-mystical-gold text-center mb-4">
              📖 分享的占卜结果
            </h1>
            <p className="text-mystical-light/70 text-center text-sm mb-12">
              {reading.timestamp}
            </p>
          </motion.div>

          {/* 显示分享的结果 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-b from-mystical-dark/60 via-mystical-purple/40 to-mystical-darker/60 rounded-xl border-2 border-mystical-gold/50 backdrop-blur-sm p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-mystical-gold mb-6 text-center">
              {reading.spreadType}
            </h2>
            <p className="text-mystical-light/80 leading-relaxed whitespace-pre-wrap text-sm">
              {reading.interpretation}
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <Link href="/divination">
              <MysticalButton variant="primary" size="md" className="mb-4">
                🔮 开始自己的占卜
              </MysticalButton>
            </Link>
            <div className="text-mystical-light/50 text-sm">
              <Link href="/" className="hover:text-mystical-gold transition-colors">
                ← 返回首页
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </MysticalLayout>
  );
}
