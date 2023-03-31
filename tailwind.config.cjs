/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontWeight: {
      thin: '100',
      light: '200',
      regular: '400',
      medium: '500',
      black: '700',
    },
    extend: {
      height: {
        nav: '10vh',
      },
      width: {
        'game-pic': '125px',
      },
      colors: {
        cta: '#ECA823',
        'desaturated-cta': '#FFAC58',
        'dark-bg': '#252525',
        'dark-text': '#E2E2E2',
        'dark-link': '#3F4246',
        'dark-menu': '#1D1D1D'
      },
      transitionDuration: {
        smooth: '500ms',
      },
    },
  },
  plugins: [],
};
