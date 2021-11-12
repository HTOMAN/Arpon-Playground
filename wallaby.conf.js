module.exports = function (wallaby) {
  const path = require('path');
  process.env.BABEL_ENV = 'test';
  process.env.NODE_ENV = 'test';
  process.env.NODE_PATH +=
    path.delimiter +
    path.join(__dirname, 'node_modules') +
    path.delimiter +
    path.join(__dirname, 'node_modules/react-scripts/node_modules');
  require('module').Module._initPaths();

  return {
    files: [
      'arpon/ui/**/*.ts?(x)',
      {
        pattern: 'node_modules/**/*',
        ignore: true,
      },
      {
        pattern: 'arpon/tests/**/*test.ts?(x)',
        ignore: true,
      },
      {
        pattern: 'arpon/**/*d.ts?(x)',
        ignore: true,
      },
      'arpon/**/*.+(ts|tsx|jsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      '!src/**/*.test.ts?(x)',
    ],

    runMode: 'onsave',

    tests: ['arpon/**/*.test.ts?(x)'],

    env: {
      type: 'node',
    },

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        isolatedModules: true,
        module: 'commonjs',
        jsx: 'React',
      }),
    },
    preprocessors: {
      '**/*.js?(x)': (file) =>
        require('babel-core').transform(file.content, {
          sourceMap: true,
          compact: false,
          filename: file.path,
          presets: ['es2015', require('babel-preset-jest'), 'react-app'],
        }),
      /* or
       * {sourceMap: true, compact: false, filename: file.path, babelrc: true}) */
    },

    testFramework: 'jest',
  };
};
