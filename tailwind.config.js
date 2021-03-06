module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  variants: {},
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        white: 'var(--color-white)',
        lighter: 'var(--color-lighter)',
        light: 'var(--color-light)',
        black: 'var(--color-black)'
      }
    }
  },
  experiments: {
    shadowLookup: true
  }
}
