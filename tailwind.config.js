/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    boxShadow: {
      none: 'none',
      sm: '2px 2px 6px hsl(0 0 15 / 4%)',
      md: '2px 2px 6px hsl(0 0 15 / 4%), 4px 4px 8px hsl(0 0 15 / 4%)',
      lg: '2px 2px 6px hsl(0 0 15 / 4%), 4px 4px 8px hsl(0 0 15 / 4%), 6px 6px 10px hsl(0 0 15 / 4%)',
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
          100: '#FAFAFA',
          200: '#F5F5F5',
          300: '#F0F0F0',
        },
        dark: {
          100: '#333333',
          200: '#262626',
          300: '#1A1A1A',
        },
        lilac: {
          50: '#FBE9FB',
          100: '#F7D4F7',
          200: '#F0A8F0',
          300: '#e87de8',
          400: '#e052e0',
          500: '#d926d9',
          600: '#ad1fad',
          700: '#821782',
          800: '#570F57',
          900: '#2B082B',
          950: '#160416',
        },
      },
    },
  },
  plugins: [],
};
