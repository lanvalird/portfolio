/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    boxShadow: {
      none: 'none',
      sm: '0 2px 2px 2px rgb(38 38 38 / 2%)',
      md: '0 2px 2px 2px rgb(38 38 38 / 2%), 0 4px 4px 4px rgb(38 38 38 / 2%)',
      lg: '0 2px 2px 2px rgb(38 38 38 / 2%), 0 4px 4px 4px rgb(38 38 38 / 2%), 0 6px 6px 6px rgb(38 38 38 / 2%)',
    },
    borderRadius: {
      none: 'none',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xl: '10px',
      full: '99999px',
    },
    extend: {
      colors: {
        light: {
          100: '#fafafa',
          200: '#ebebeb',
          300: '#dbdbdb',
        },
        dark: {
          100: '#262626',
          200: '#1a1a1a',
          300: '#0d0d0d',
        },
        lilac: {
          50: '#f7d4f7',
          100: '#f4bef4',
          200: '#f0a8f0',
          300: '#e87de8',
          400: '#e052e0',
          500: '#d926d9',
          600: '#ad1fad',
          700: '#821782',
          800: '#570f57',
          900: '#410b41',
          950: '#2b082b',
        },
      },
    },
  },
  plugins: [],
};
