'use client';

import { motion } from 'framer-motion';
import { TarotCard } from '@/lib/types';
import { ANIMATION_DURATION } from '@/lib/constants';

interface CardProps {
  card: TarotCard | null;
  reversed?: boolean;
  isFlipping?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  showDetails?: boolean;
}

const sizeClasses = {
  sm: 'w-24 h-36',
  md: 'w-32 h-48',
  lg: 'w-40 h-60',
};

export function TarotCardComponent({
  card,
  reversed = false,
  isFlipping = false,
  onClick,
  size = 'md',
  showDetails = false,
}: CardProps) {
  return (
    <motion.div
      onClick={onClick}
      className={`relative ${sizeClasses[size]} cursor-pointer`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* 卡牌背面 */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br from-mystical-purple via-mystical-blue to-mystical-dark rounded-lg border-2 border-mystical-gold shadow-2xl flex items-center justify-center`}
        animate={isFlipping ? { rotateY: 180 } : { rotateY: 0 }}
        transition={{ duration: ANIMATION_DURATION.normal / 1000 }}
        style={{
          backfaceVisibility: 'hidden',
        }}
      >
        <div className="text-center">
          <div className="text-4xl mb-2">🔮</div>
          <div className="text-xs text-mystical-gold font-serif">TAROT</div>
        </div>
      </motion.div>

      {/* 卡牌正面 */}
      {card && (
        <motion.div
          className={`absolute inset-0 bg-gradient-to-b from-mystical-dark via-mystical-purple to-mystical-darker rounded-lg border-2 border-mystical-gold shadow-2xl p-3 flex flex-col justify-between ${
            reversed ? 'rotate-180' : ''
          }`}
          animate={isFlipping ? { rotateY: 0 } : { rotateY: -180 }}
          transition={{ duration: ANIMATION_DURATION.normal / 1000 }}
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          {/* 发光边框效果 */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-mystical-gold via-transparent to-mystical-gold opacity-0 hover:opacity-30 transition-opacity duration-300" />

          <div className="relative z-10 text-center">
            <h3 className={`text-xs font-bold text-mystical-gold mb-1 ${
              size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'
            }`}>
              {card.name}
            </h3>
            <p className={`text-xs text-mystical-light opacity-75 ${
              size === 'sm' ? 'hidden' : ''
            }`}>
              {card.englishName}
            </p>
          </div>

          {/* 中央符号 */}
          <div className={`text-center ${
            size === 'sm' ? 'text-2xl' : size === 'md' ? 'text-4xl' : 'text-6xl'
          }`}>
            ✨
          </div>

          {/* 底部信息 */}
          {showDetails && size !== 'sm' && (
            <div className="relative z-10 text-center">
              <p className="text-xs text-mystical-gold font-serif">
                {reversed ? '逆位' : '正位'}
              </p>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
