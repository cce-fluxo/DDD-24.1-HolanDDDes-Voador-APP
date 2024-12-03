/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "rosa-1": "#FFEDF0",
        "rosa-2": "#F45065",
        "rosa-3": "#F42C46",
        "rosa-4": "#DC143B",
        "verde-1": "#219653",
        preto: "#372F30",
        branco: "#FBFBFB",
        "branco-2": "#F7F3F3",
        "branco-3": "#D9D9D9",
        "branco-total": "#FFFFFF",
        "cinza-0": "#F6F4F4",
        "cinza-1": "#CEC6C7",
        "cinza-2": "#AB9C9F",
        "cinza-3": "#574A4D",
        "cinza-4": "#372F30",
        "laranja": "#FF6F45",
        "laranja-1": "#FD765E",
      },
      fontFamily: {
        PoppinsBold: ["Poppins-Bold", "sans-serif"],
        PoppinsSemiBold: ["Poppins-SemiBold", "sans-serif"],
        PoppinsMedium: ["Poppins-Medium", "sans-serif"],
        PoppinsRegular: ["Poppins-Regular", "sans-serif"],
        PoppinsLight: ["Poppins-Light", "sans-serif"],

        ReadexProBold: ["ReadexPro-Bold", "sans-serif"],
        ReadexProSemiBold: ["ReadexPro-SemiBold", "sans-serif"],
        ReadexProMedium: ["ReadexPro-Medium", "sans-serif"],
        ReadexProRegular: ["ReadexPro-Regular", "sans-serif"],
        ReadexProLight: ["ReadexPro-Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
