/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#000",
      secondary: "rgb(102, 102, 102)",
      white: "#fff",
      brand: {
        primary: "#6b47ed",
        secondary: "#D4CCF7",
      },
      gray: {
        light: "#979797",
        DEFAULT: "#F5F5F5",
      },
      // ...defaultTheme.colors
    },
    fontSize: {
      sm: ["12px", "1.5"],
      base: ["16px", "1.49"],
      heading: ["20px", "1.58"],
      lg: ["20px", "1.58"],
      xl: ["24px", "1"],
      "2xl": ["32px", "1.32"],
      "3xl": ["36px", "1.25"],
      "4xl": ["48px", "1"],
      "5xl": ["56px", "1"],
      "6xl": ["64px", "1"],
      "7xl": ["98px", "1"],
    },
    fontFamily: {
      title: ["Nunito-Bold", "sans-serif"],
      body: ["Nunito", "sans-serif"],
      semibold: ["Nunito-SemiBold", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    // borderWidth: {
    //   DEFAULT: "1px",
    //   0: "0",
    //   2: "2px",
    //   3: "3px",
    //   4: "4px",
    //   6: "6px",
    // },
    // borderRadius: {
    //   DEFAULT: "0",
    //   xs: "2px",
    //   md: "3px",
    //   lg: "12px",
    //   xl: "24px",
    // },
    corePlugins: {
      preflight: false,
    },
    important: true,
    extend: {
      flexShrink: {
        0: "0",
        1: "1",
        2: "2",
        unset: "unset",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
