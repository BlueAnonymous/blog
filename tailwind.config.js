const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        day: {
          DEFAULT: '#FFF7DF'
        },
        night: {
          DEFAULT: '#18181B'
        }
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
