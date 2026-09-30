/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#030712',
          alt: '#020617',
          card: 'rgba(9, 13, 26, 0.75)',
          cardSolid: '#090D1A',
          navy: '#07111F',
        },
        neon: {
          purple: '#7C3AED',
          indigo: '#6366F1',
          blue: '#3B82F6',
          lime: '#D9FF72',
          cyan: '#06B6D4',
        },
        slate: {
          text: '#F8FAFC',
          muted: '#94A3B8',
          subtle: '#64748B',
          border: 'rgba(255, 255, 255, 0.08)',
          borderNeon: 'rgba(124, 58, 237, 0.25)',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'neon-purple': '0 0 25px -5px rgba(124, 58, 237, 0.5), 0 0 10px -5px rgba(124, 58, 237, 0.3)',
        'neon-lime': '0 0 25px -5px rgba(217, 255, 114, 0.4), 0 0 10px -5px rgba(217, 255, 114, 0.2)',
        'neon-blue': '0 0 25px -5px rgba(59, 130, 246, 0.5), 0 0 10px -5px rgba(59, 130, 246, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-hover': '0 12px 40px 0 rgba(124, 58, 237, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'orbit-slow': 'spin 25s linear infinite',
        'orbit-reverse': 'spin-reverse 35s linear infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(124, 58, 237, 0.4))' },
          '100%': { opacity: '0.9', filter: 'drop-shadow(0 0 30px rgba(217, 255, 114, 0.7))' },
        }
      }
    },
  },
  plugins: [],
}
