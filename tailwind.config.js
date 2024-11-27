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
    extend: {
      listStyleImage: {
        right: 'url("/public/right.png")',
      },
      colors: {
        "rosa-1": "#FFEDF0",
        "rosa-2": "#F45065",
        "rosa-3": "#F42C46",
        "rosa-4": "#DC143B",
        "preto": "#372F30",
        "branco": "#FBFBFB",
        "branco-2": "#F7F3F3",
        "branco-3": "#D9D9D9",
        "cinza-0": "#F6F4F4",
        "cinza-1": "#CEC6C7",
        "cinza-2": "#AB9C9F",
        "cinza-3": "#574A4D",
        "cinza-4": "#372F30",
        "laranja": "#FD6944",
        "laranja-1": "#FD765E",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        readex_pro: ["var(--font-readex-pro)"],
        work_sans: ["var(--font-work-sans)"],
      },
      filter: {
        'whiten': 'grayscale(100%) brightness(100%) contrast(100%) invert(100%)',
      },
    },
  },
  plugins: [],
}

