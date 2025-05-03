// tailwind.config.js
module.exports = {
    theme: {
      extend: {
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
  }
  