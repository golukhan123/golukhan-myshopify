/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.liquid', // Only scan Shopify liquid templates
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F8F8F8',
          200: '#CCCCCC',
          300: '#B2B2B2',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4C4C4C',
          800: '#333333',
          900: '#191919',
        },
       
        
        warning: {
          100: '#FFE4C0',
          200: '#FFDDA1',
          300: '#FFD08A',
          400: '#FFC772',
          500: '#EEA23E',
          600: '#FFAE43',
          700: '#D78100',
          800: '#A15C00',
          900: '#F2BF91',
        },
        success: {
          100: '#B1EEB9',
          200: '#91E99E',
          300: '#71E382',
          400: '#52DD67',
          500: '#2EBF43',
          600: '#32D74B',
          700: '#2AA63C',
          800: '#268E34',
          900: '#22762C',
        },
      }
    },
  },
  plugins: [],
};


