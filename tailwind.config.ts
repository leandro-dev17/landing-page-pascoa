import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Chocolate palette for Easter theme
        chocolate: {
          50: '#fdf8f3',
          100: '#faeae0',
          200: '#f5d5c0',
          300: '#edbb99',
          400: '#e39b6e',
          500: '#d67c4a',
          600: '#c76241',
          700: '#a84d36',
          800: '#8a3f2e',
          900: '#6b3329',
        },
        caramel: {
          50: '#fffaf4',
          100: '#fef1e1',
          200: '#fde4c8',
          300: '#fcc992',
          400: '#fab668',
          500: '#f69e3e',
          600: '#eb8c2e',
          700: '#c67423',
          800: '#a05d1e',
          900: '#82461b',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        cream: {
          50: '#fafaf7',
          100: '#f5f5f0',
          200: '#ede8dd',
          300: '#e5decc',
          400: '#ddd2b8',
          500: '#d5c6a4',
          600: '#c9b598',
          700: '#b8a388',
          800: '#9a8878',
          900: '#7d7164',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-easter': 'linear-gradient(135deg, #f5d5c0 0%, #fde4c8 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
