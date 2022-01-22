module.exports = {
  /* future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  corePlugins: {
    gradientColorStops: true,
  },
  darkMode: 'media',
  prefix: '', */
  content: ['./src/{components,intermediary,elements,pages,primitives,styles}/**/*.{js,ts,jsx,tsx}'],
  theme: require('./src/theme.js'),
  variants: {},
  plugins: [],
};
