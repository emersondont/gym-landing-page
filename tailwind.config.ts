import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FA6A02',
        bg1: '#0D0D0D',
        bg2: '#090707',
        tx1: '#FFFFFF',
        tx2: '#E1E1E1',
        tx3: '#878787',
        tx4: 'rgba(255, 255, 255, 0.5)',
        tx5: '#48474e'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'urbanist': ['Urbanist', 'sans-serif'],
      },
      keyframes: {
        appear: {
          'from': { scale: '.98', opacity: '.2' },
          'to': { scale: '1', opacity: '1' }
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
      },
      animation: {
        appear: 'appear .4s ease-out both',
        fadeInUp: 'fadeInUp .4s ease-out both',
        fadeInDown: 'fadeInDown .4s ease-out both',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: any, variants?: any) => void }) {
      const newUtilities = {
        '.animation-delay-200': {
          'animation-delay': '200ms',
        },
        '.animation-delay-400': {
          'animation-delay': '400ms',
        },
        '.animation-delay-600': {
          'animation-delay': '600ms',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
};
export default config;
