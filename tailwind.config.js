/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.liquid', // Only scan Shopify liquid templates
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#B5B3AD',
          200: '#CCCCCC',
          300: '#222221',
          400: '#3B3A37',
          500: '#808080',
          600: '#666666',
          700: '#4C4C4C',
          800: '#333333',
          900: '#191919',
        },
        
        warning: {
          100: '#EEEEEC',
          200: '#b97d47',
          300: '#FFD08A',
          400: '#FFC772',
          500: '#EEA23E',
          600: '#FFAE43',
          700: '#D78100',
          800: '#A15C00',
          900: '#F2BF91',
        },
       
      }
    },
  },
  plugins: [],
};


