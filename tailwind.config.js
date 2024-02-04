/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'FFEE58': '#FFEE58',
      },
      fontFamily: {
        'jedi-outline': ['jedi-outline', 'sans-serif'],
        'Exo 2': ['sans-serif'],
      },
    },
  },
  plugins: [],
}

