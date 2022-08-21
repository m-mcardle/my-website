module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './mixins/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        black: '#282828',
        blue: '#00B9E1',
        grey: '#D9D9D9'
      },
      fontSize: {
        tiny: '0.5rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
