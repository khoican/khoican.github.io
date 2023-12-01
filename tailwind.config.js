const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ["./**/*.{html,js}"]
  },
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Poppins", ...defaultTheme.fontFamily.sans],
      }
    },
    screens: {
      'lg': {'max': '640px'},
      'xl': {'max': '1024px'},
    }
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}

