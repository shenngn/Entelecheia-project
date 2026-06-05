/**
 * 音效管理系统
 */
export class SoundManager {
  private static audioContext: AudioContext | null = null;

  /**
   * 初始化音频上下文
   */
  static initialize(): void {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  /**
   * 播放洗牌音效
   */
  static playShuffleSound(): void {
    this.initialize();
    if (!this.audioContext) return;

    const now = this.audioContext.currentTime;
    const oscillator = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();

    oscillator.connect(gain);
    gain.connect(this.audioContext.destination);

    // 洗牌音效：多个下降音调
    oscillator.frequency.setValueAtTime(800, now);
    oscillator.frequency.exponentialRampToValueAtTime(200, now + 0.3);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

    oscillator.start(now);
    oscillator.stop(now + 0.3);
  }

  /**
   * 播放翻牌音效
   */
  static playFlipSound(): void {
    this.initialize();
    if (!this.audioContext) return;

    const now = this.audioContext.currentTime;
    const oscillator = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();

    oscillator.connect(gain);
    gain.connect(this.audioContext.destination);

    // 翻牌音效：快速上升的音调
    oscillator.frequency.setValueAtTime(400, now);
    oscillator.frequency.exponentialRampToValueAtTime(1200, now + 0.2);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

    oscillator.start(now);
    oscillator.stop(now + 0.2);
  }

  /**
   * 播放成功音效
   */
  static playSuccessSound(): void {
    this.initialize();
    if (!this.audioContext) return;

    const now = this.audioContext.currentTime;
    const notes = [523, 659, 784]; // C, E, G

    notes.forEach((freq, index) => {
      const oscillator = this.audioContext!.createOscillator();
      const gain = this.audioContext!.createGain();

      oscillator.connect(gain);
      gain.connect(this.audioContext!.destination);

      oscillator.frequency.value = freq;
      gain.gain.setValueAtTime(0.1, now + index * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, now + index * 0.1 + 0.2);

      oscillator.start(now + index * 0.1);
      oscillator.stop(now + index * 0.1 + 0.2);
    });
  }

  /**
   * 播放神秘音效
   */
  static playMysticalSound(): void {
    this.initialize();
    if (!this.audioContext) return;

    const now = this.audioContext.currentTime;
    const oscillator = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();

    oscillator.connect(gain);
    gain.connect(this.audioContext.destination);

    oscillator.frequency.setValueAtTime(440, now);
    oscillator.frequency.exponentialRampToValueAtTime(220, now + 0.5);

    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);

    oscillator.start(now);
    oscillator.stop(now + 0.5);
  }
}
