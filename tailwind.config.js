/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite'
      }
    },
  },
  plugins: [],
}

