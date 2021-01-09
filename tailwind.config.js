module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  corePlugins: {
    gradientColorStops: true,
  },
  darkMode: 'media',
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
  theme: require('./src/theme.js'),
  variants: {},
  plugins: [],
}
