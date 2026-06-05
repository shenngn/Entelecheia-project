'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function MysticalLayout({ children, className = '' }: LayoutProps) {
  return (
    <div className={`relative min-h-screen bg-starfield overflow-hidden ${className}`}>
      {/* 星空背景 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full star"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            style={{
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* 神秘光晕 */}
      <motion.div
        className="fixed top-1/2 left-1/2 w-96 h-96 bg-mystical-gold rounded-full blur-3xl opacity-10 pointer-events-none"
        animate={{
          x: ['-50%', '-45%', '-50%'],
          y: ['-50%', '-48%', '-50%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 内容容器 */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
