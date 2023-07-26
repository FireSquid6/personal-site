const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },

    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },

      colors: {
        bg_dark: "#1f2335",
        bg: "#24283b",
        bg_highlight: "#292e42",
        black1: "#414868",
        fg: "#c0caf5",
        fg_dark: "#a9b1d6",
        fg_gutter: "#3b4261",
        dark3: "#545c7e",
        black2: "#565f89",
        dark5: "#737aa2",
        blue0: "#3d59a1",
        blue: "#7aa2f7",
        cyan: "#7dcfff",
        blue1: "#2ac3de",
        blue2: "#0db9d7",
        blue5: "#89ddff",
        blue6: "#b4f9f8",
        blue7: "#394b70",
        magenta: "#bb9af7",
        magenta2: "#ff007c",
        purple: "#9d7cd8",
        orange: "#ff9e64",
        yellow: "#e0af68",
        green: "#9ece6a",
        green1: "#73daca",
        green2: "#41a6b5",
        teal: "#1abc9c",
        red: "#f7768e",
        red1: "#db4b4b",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
