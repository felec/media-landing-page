const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  variants: {},
  plugins: [],
  theme: {
    screens: {
      xxs: '375px',
      xs: '410px',
      s: '600px',
      ...defaultTheme.screens,
    },
  },
};
