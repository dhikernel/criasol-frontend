/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    fontSize: {
      sm: '0.625rem', // -> 10px
      base: '0.813rem', // -> 13px
      lg: '0.938rem', // -> 15px
      xlg: '1.125rem', // -> 18px
      '2xlg': '1.563rem', // -> 25px
    },
    extend: {
      colors: {
        //Colors
        'primary': '#FFFFFF',
        'secondary': '#F5821F',
        'tertiary': '#424242',
        'quaternary': '#6A6B70',
        'error': '#FF0000',
        'correct': '#00A551',
        'primary-text': '#FFFFFF',
        'secondary-text': '#424242',
        'tertiary-text': '#F5821F',
      },
      maxWidth: {
        'container': '81.25rem', // -> 1300px
      },
      borderRadius: {
        '15': '15px',
        '20': '20px',
      },
      screens: {
        'w400': '400px',
        'w644': '644px',
        'w700': '700px',
        'w1300': '1300px'
      }
    },
  },
  plugins: [],
}

