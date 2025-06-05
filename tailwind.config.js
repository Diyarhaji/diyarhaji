/** @type {import('tailwindcss').Config} */
const rtl = require('tailwindcss-rtl');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        bgOne: 'var(--bgOne)',
        bgTwo: "var(--bgTwo)",
        hOne: "var(--hOne)",
        hTwo: "var(--hTwo)",
        hThree: "var(--hThree)",
        hFour: "var(--hFour)",
        hFive: "var(--hFive)",
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          '0%': {
            borderRadius: '50% 50% 50% 50%',
          },
          '25%': {
            borderRadius: '60% 40% 30% 70% / 50% 60% 40% 50%',
          },
          '50%': {
            borderRadius: '36% 64% 70% 30% / 44% 48% 52% 56%',
          },
          '75%': {
            borderRadius: '40% 60% 70% 30% / 60% 50% 70% 40%',
          },
          '100%': {
            borderRadius: '50% 50% 50% 50%',
          },
        },
      },
      animation: {
        slide: 'slide 10s linear infinite',
        blob: 'blob 7s linear alternate infinite',
      },
    },
  },
  plugins: [rtl],
}
