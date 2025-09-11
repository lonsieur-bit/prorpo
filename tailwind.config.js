/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#1E40AF',
          700: '#1d4ed8',
          800: '#1e3a8a',
          900: '#1e40af'
        },
        secondary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#0891B2',
          600: '#0e7490',
          700: '#155e75',
          800: '#164e63',
          900: '#083344'
        }
      },
      fontFamily: {
        arabic: ['Noto Sans Arabic', 'system-ui', 'sans-serif']
      }
    },
  },
      arabic: ['Noto Sans Arabic', 'system-ui', 'sans-serif'],
      almarai: ['Almarai', 'Noto Sans Arabic', 'system-ui', 'sans-serif'],
      'arabic-city': ['Noto Sans Arabic', 'system-ui', 'sans-serif']
}