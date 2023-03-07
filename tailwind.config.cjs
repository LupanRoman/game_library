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
      colors: {
        cta: '#ECA823',
      },
      transitionDuration: {
        smooth: '500ms',
      },
    },
  },
  plugins: [],
};
