/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.svg"],
  theme: {
    extend: {
      textColor: ["dark"],
      colors: {
        backgroundL: "#F8F9F8", //"#EFEEEB",
        lightL: "#fff",
        textL: "#C8884F",
        textNormalL: "#16181C",
        contrastL: "#C8884F",
        accentL: "#A8A6BA",
        secondaryDarkL: "#84a98c",

        lightD: "#edf6f9",
        textD: "#EDF6F9",
        textNormalD: "#E4F1EF",
        buttonBg: "#BAAC85", // Define your button background color
        buttonHoverBg: "#C8884F", // Define your hover background color
        buttonText: "#FFFFFF", // Define your text color
        buttonHoverText: "#000000",
      },
      boxShadow: {
        "custom-default": "0 4px 15px rgba(0, 0, 0, 0.1)", // Custom default shadow
        "custom-hover": "0 8px 30px rgba(0, 0, 0, 0.2)", // Custom hover shadow
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
