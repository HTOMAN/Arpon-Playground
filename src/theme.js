const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme')

/*
module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}
*/
module.exports = {
  /* backgroundColor: theme => ({
    ...theme('colors'),
    'primary': '#3490dc',
    'secondary': '#ffed4a',
    'danger': '#e3342f',
  }), */
  colors: {
    primary: 'var(--primary)',
    secondary: 'var(--secondary)',
    gray: colors.trueGray,
    warmGray: colors.warmGray,
    red: colors.red,
    blue: colors.lightBlue,
    yellow: colors.amber,
    green: colors.green,
  },
  fontFamily: {
    sans: [
      'ITC Avant Garde Gothic Std Book',
      'ITC Avant Garde Gothic Std',
      'itc-avant-garde-gothic-pro',
      ...defaultTheme.fontFamily.sans,
    ],
    serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
  },
  extend: {
    colors: {
      background: "var(--background)",
    },
  },
}