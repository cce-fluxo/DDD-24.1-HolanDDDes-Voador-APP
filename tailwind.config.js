/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/app/*.tsx",
    "./src/components/*.tsx",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./screens/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [],
}

