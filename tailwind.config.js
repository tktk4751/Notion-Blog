/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["pages/**/*.{js,ts,jsx,tsx}", "components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        128: "32rem",
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: ["class", '[data-theme="dark"]'],
  daisyui: {
    themes: ["synthwave", "cmyk"],
  },
};
