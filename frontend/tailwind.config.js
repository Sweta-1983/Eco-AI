/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#66BB6A',
          500: '#43A047',
          600: '#2E7D32',
          700: '#256B2A',
          800: '#1B5E20',
          900: '#123E16',
        },
        accent: {
          50: '#FFF8ED',
          100: '#FFE9C4',
          300: '#FFCC80',
          400: '#FFB74D',
          500: '#F59E0B',
        },
        earth: {
          50: '#F8FAF7',
          100: '#EEF4EC',
          900: '#162117',
        },
        oldBrand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
