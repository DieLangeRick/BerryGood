/// <reference types="vitest" />
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0a0a0f",
        berry: "#e8294a",
        leaf: "#3d9b45",
        cream: "#f0ece2",
        surface: "#111118",
      },
      fontFamily: {
        display: ["Orbitron", "monospace"],
        mono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
