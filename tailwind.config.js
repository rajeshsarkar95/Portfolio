/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ['"Comic Relief"', 'cursive'],
      },
      keyframes: {
        underlineGrow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        underlineGrow: 'underlineGrow 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};
