/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // This is custom color palette
        'ashikur': {
          50: '#ecfbe6',
          100: '#d1edc3',
          200: '#b3e19e',
          300: '#96d578',
          400: '#79c952',
          500: '#5faf39',
          600: '#4a882b',
          700: '#34611e',
          800: '#1e3a10',
          900: '#051400',
        },
        'navCol':
        {
          50: '#faedf7',
          100: '#e3cedd',
          200: '#cfafc5',
          300: '#bb8ead',
          400: '#a96f96',
          500: '#8f557c',
          600: '#704361',
          700: '#502f45',
          800: '#311c2a',
          900: '#2b3148',
        },
      },
    },
  },
  plugins: [],
};

