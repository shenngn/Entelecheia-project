import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mystical': {
          'dark': '#0F1729',
          'darker': '#050A15',
          'gold': '#D4AF37',
          'light': '#E8E8E8',
          'purple': '#6B46C1',
          'blue': '#1E40AF',
        }
      },
      backgroundImage: {
        'starfield': 'radial-gradient(circle, #1a1a3e 0%, #0F1729 50%, #050A15 100%)',
        'mystical-glow': 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.2), transparent)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'flip-y': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        'flip-card': {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(90deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
        'flip-card': 'flip-card 0.6s ease-in-out',
      },
    },
  },
  plugins: [],
}
export default config
