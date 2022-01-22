module.exports = {
  plugins: [
    'stylelint',
    'postcss-import',
    /* 'postcss-import',
    [
      'postcss-import',
      {
        plugins: ['stylelint'],
      },
    ], */
    'tailwindcss/nesting',
    'postcss-nesting',
    'tailwindcss',
    'postcss-flexbugs-fixes',
    'autoprefixer',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    ['postcss-reporter', { clearReportedMessages: true }],
  ],
};
