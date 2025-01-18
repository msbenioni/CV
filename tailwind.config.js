/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'scroll-y': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      animation: {
        'scroll-y': 'scroll-y 20s linear infinite',
      },
    },
  },
  plugins: [],
};
