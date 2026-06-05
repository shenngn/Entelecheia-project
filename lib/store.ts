import { create } from 'zustand';
import { DivinationReading, TarotCard, SpreadType } from './types';

interface DivinationStore {
  // 当前状态
  selectedSpread: SpreadType | null;
  drawnCards: TarotCard[];
  isDrawing: boolean;
  currentReading: DivinationReading | null;
  
  // 历史记录
  readings: DivinationReading[];
  
  // 设置方法
  setSelectedSpread: (spread: SpreadType) => void;
  setDrawnCards: (cards: TarotCard[]) => void;
  setIsDrawing: (drawing: boolean) => void;
  setCurrentReading: (reading: DivinationReading | null) => void;
  addReading: (reading: DivinationReading) => void;
  clearDrawing: () => void;
}

export const useDivinationStore = create<DivinationStore>((set) => ({
  selectedSpread: null,
  drawnCards: [],
  isDrawing: false,
  currentReading: null,
  readings: [],
  
  setSelectedSpread: (spread) => set({ selectedSpread: spread }),
  setDrawnCards: (cards) => set({ drawnCards: cards }),
  setIsDrawing: (drawing) => set({ isDrawing: drawing }),
  setCurrentReading: (reading) => set({ currentReading: reading }),
  addReading: (reading) => set((state) => ({
    readings: [reading, ...state.readings],
  })),
  clearDrawing: () => set({
    selectedSpread: null,
    drawnCards: [],
    isDrawing: false,
    currentReading: null,
  }),
}));
