'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景覆盖 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* 模态框 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-gradient-to-b from-mystical-dark via-mystical-purple to-mystical-darker rounded-xl border-2 border-mystical-gold shadow-2xl shadow-mystical-gold/20 max-w-md w-full max-h-[90vh] overflow-y-auto">
              {/* 头部 */}
              {title && (
                <div className="border-b border-mystical-gold/30 p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-mystical-gold">{title}</h2>
                    <button
                      onClick={onClose}
                      className="text-mystical-light hover:text-mystical-gold transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}

              {/* 内容 */}
              <div className="p-6">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
