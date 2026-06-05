'use client';

import { motion } from 'framer-motion';
import { MysticalLayout } from '@/components/Layout/MysticalLayout';
import { LoadingSpinner } from '@/components/Loading/LoadingSpinner';

export function ReadingHistoryPage() {
  // TODO: 从存储中加载历史记录
  const readings = [];

  return (
    <MysticalLayout>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-mystical-gold text-center mb-12"
          >
            📚 占卜历史
          </motion.h1>

          {readings.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔮</div>
              <p className="text-mystical-light/70 text-lg">
                还没有任何占卜记录
              </p>
              <p className="text-mystical-light/50 text-sm mt-2">
                开始你的第一次占卜之旅吧
              </p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {/* 占卜记录列表 */}
            </div>
          )}
        </div>
      </div>
    </MysticalLayout>
  );
}
