'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MysticalLayout } from '@/components/Layout/MysticalLayout';
import { MysticalButton } from '@/components/Button/MysticalButton';
import { TarotCardComponent } from '@/components/Card/TarotCard';
import { LoadingSpinner } from '@/components/Loading/LoadingSpinner';
import { Modal } from '@/components/Modal/Modal';
import { SPREADS, MAJOR_ARCANA } from '@/lib/constants';
import { useDivinationStore } from '@/lib/store';
import { shuffle, delay } from '@/lib/utils';
import Link from 'next/link';

export default function Divination() {
  const [step, setStep] = useState<'spread-select' | 'shuffling' | 'drawing' | 'result'>('spread-select');
  const [selectedSpread, setSelectedSpread] = useState<typeof SPREADS[0] | null>(null);
  const [drawnCards, setDrawnCards] = useState<any[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [cardPositions, setCardPositions] = useState<number[]>([]);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  // 第一步：选择牌阵
  const handleSelectSpread = (spread: typeof SPREADS[0]) => {
    setSelectedSpread(spread);
    setStep('shuffling');
    handleShuffle();
  };

  // 第二步：洗牌动画
  const handleShuffle = async () => {
    setIsShuffling(true);
    // 模拟洗牌
    await delay(2000);
    setIsShuffling(false);
    setStep('drawing');
  };

  // 第三步：抽牌
  const handleDrawCard = async (index: number) => {
    if (flippedCards.has(index)) return;

    // 从大阿卡纳中随机抽取
    const randomCard = MAJOR_ARCANA[Math.floor(Math.random() * MAJOR_ARCANA.length)];
    const isReversed = Math.random() > 0.5;

    const newDrawnCards = [...drawnCards];
    newDrawnCards[index] = {
      ...randomCard,
      reversed: isReversed,
    };
    setDrawnCards(newDrawnCards);

    const newFlipped = new Set(flippedCards);
    newFlipped.add(index);
    setFlippedCards(newFlipped);

    // 播放翻转动画
    await delay(600);

    // 如果所有卡牌都已翻转，进入结果页
    if (newFlipped.size === (selectedSpread?.positions?.length || 1)) {
      await delay(1000);
      setStep('result');
    }
  };

  const handleReset = () => {
    setStep('spread-select');
    setSelectedSpread(null);
    setDrawnCards([]);
    setFlippedCards(new Set());
  };

  return (
    <MysticalLayout>
      <div className="min-h-screen py-12 px-4">
        {/* 步骤指示器 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            {['选择牌阵', '洗牌', '抽牌', '查看结果'].map((title, index) => {
              const steps: (typeof step)[] = ['spread-select', 'shuffling', 'drawing', 'result'];
              const isActive = steps.indexOf(step) >= index;
              return (
                <div key={index} className="flex items-center flex-1">
                  <motion.div
                    animate={{ scale: isActive ? 1.2 : 1 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      isActive
                        ? 'bg-mystical-gold text-mystical-darker'
                        : 'bg-mystical-dark border border-mystical-gold/30 text-mystical-light/50'
                    }`}
                  >
                    {index + 1}
                  </motion.div>
                  {index < 3 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        isActive ? 'bg-mystical-gold' : 'bg-mystical-gold/20'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 步骤1: 选择牌阵 */}
        <AnimatePresence>
          {step === 'spread-select' && (
            <motion.div
              key="spread-select"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center text-mystical-gold mb-12">
                选择一个牌阵
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SPREADS.map((spread) => (
                  <motion.button
                    key={spread.id}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSelectSpread(spread)}
                    className="p-6 rounded-lg bg-gradient-to-br from-mystical-purple/30 to-mystical-blue/30 border-2 border-mystical-gold/40 hover:border-mystical-gold hover:shadow-lg hover:shadow-mystical-gold/20 transition-all duration-300 text-left"
                  >
                    <div className="text-4xl mb-3">{spread.icon}</div>
                    <h3 className="text-xl font-bold text-mystical-gold mb-2">
                      {spread.name}
                    </h3>
                    <p className="text-mystical-light/70 text-sm">
                      {spread.description}
                    </p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* 步骤2: 洗牌 */}
          {step === 'shuffling' && (
            <motion.div
              key="shuffling"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto text-center py-20"
            >
              <h2 className="text-3xl font-bold text-mystical-gold mb-8">
                {selectedSpread?.name}
              </h2>
              <div className="mb-8">
                <motion.div
                  animate={{ rotateZ: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="w-32 h-48 mx-auto bg-gradient-to-br from-mystical-gold to-yellow-400 rounded-lg shadow-2xl shadow-mystical-gold/50"
                />
              </div>
              <LoadingSpinner message="正在洗牌..." />
            </motion.div>
          )}

          {/* 步骤3: 抽牌 */}
          {step === 'drawing' && (
            <motion.div
              key="drawing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center text-mystical-gold mb-12">
                点击卡牌开始抽牌
              </h2>
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                {selectedSpread?.positions?.map((position, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleDrawCard(index)}
                  >
                    <TarotCardComponent
                      card={drawnCards[index] || null}
                      isFlipping={!flippedCards.has(index) && !drawnCards[index]}
                      size="md"
                      showDetails
                    />
                    <p className="text-center text-mystical-light/70 text-xs mt-2 max-w-32">
                      {position.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 步骤4: 结果 */}
          {step === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center text-mystical-gold mb-12">
                ✨ 占卜结果 ✨
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {drawnCards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-lg bg-mystical-dark/40 border border-mystical-gold/30 backdrop-blur-sm"
                  >
                    <div className="flex gap-4">
                      <TarotCardComponent card={card} reversed={card.reversed} size="sm" />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-mystical-gold mb-2">
                          {selectedSpread?.positions?.[index]?.name}
                        </h3>
                        <p className="text-mystical-light/70 text-sm mb-3">
                          {card.name}
                        </p>
                        <p className="text-mystical-light/60 text-xs leading-relaxed">
                          {card.meaning[card.reversed ? 'reversed' : 'upright'][0]}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 行动按钮 */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MysticalButton variant="secondary" onClick={handleReset} size="md">
                  再来一次
                </MysticalButton>
                <Link href="/">
                  <MysticalButton variant="ghost" size="md">
                    返回首页
                  </MysticalButton>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MysticalLayout>
  );
}
