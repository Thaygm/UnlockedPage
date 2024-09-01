/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './plugins/**/*.{vue,js}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
        'gilroy-regular': ['Gilroy-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
