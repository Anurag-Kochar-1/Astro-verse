/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Brand: "#0EA5E9",
        Darkest: "#0F172A",
        Dark: "#37476c",
        Mid: "#CBD5E1",
        Light: "#e6ecf3",
        Lightest: "#FFFFFF",
        BrandTwo: "#0EA5A9",
      },
      fontFamily: {
        nunito: ['var(--font-nunito)', ...fontFamily.sans],
        nunito_sans: ['var(--font-nunito-sans)', ...fontFamily.sans],
      }

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
