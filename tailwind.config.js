/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'jaune': '#FFD53E',
        'noir': '#010101',
        'gris': '#404040',
        'gris-clair': '#F0F1F4',
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
        manrope: "Manrope, sans-serif",
      },
      screens: {
        'tablet': '640px',
      },
    },
  },
  plugins: [],
}

