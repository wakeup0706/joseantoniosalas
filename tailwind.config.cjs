/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // keyframes: {
      //   draw: {
      //     '0%': { strokeDashoffset: '100' },
      //     '49.999%': { strokeDashoffset: '0' },
      //     '50%': { strokeDashoffset: '100' },
      //     '100%': { strokeDashoffset: '100' },
      //   },
      // },
      // animation: {
      //   'draw-line': 'draw 4s steps(1) infinite',
      // },
    },
  },
  plugins: [],
};