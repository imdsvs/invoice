/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#38B6FF',
          500: '#0094FF',
          900: '#003A66',
        },
        blue: {
          500: '#0066FF',
          600: '#0052CC',
        },
        gray: {
          800: '#1F2937',
          900: '#111827',
          950: '#0B1120',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 15px rgba(56, 182, 255, 0.5)',
      },
    },
  },
  plugins: [],
};