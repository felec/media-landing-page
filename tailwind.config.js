const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  variants: {},
  plugins: [],
  theme: {
    screens: {
      ss: '375px',
      xs: '500px',
      ...defaultTheme.screens,
    },
  },
};
