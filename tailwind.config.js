/// <reference types="vitest" />
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0e0e1a",
        berry: "#e8294a",
        leaf: "#3d9b45",
        cream: "#faf7f4",
        surface: "#ffffff",
        ink: "#1a1525",
      },
      fontFamily: {
        display: ["Orbitron", "monospace"],
        mono: ["Space Mono", "monospace"],
        serif: ["EB Garamond", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
