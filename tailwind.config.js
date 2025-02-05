/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.svg"],
  theme: {
    extend: {
      textColor: ["dark"],
      colors: {
        backgroundL: "#edf6f9",
        lightL: "#c7ebea",
        textL: "#006d77",
        textNormalL: "#2c3d49",
        contrastL: "#f28482",
        secondaryDarkL: "#84a98c",

        lightD: "#edf6f9",
        textD: "#EDF6F9",
        textNormalD: "#E4F1EF",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
