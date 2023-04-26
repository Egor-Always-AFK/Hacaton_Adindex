/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    trajectory: {
      primary: "#a991f7",
      secondary: "#f6d860",
      accent: "#37cdbe",
      neutral: "#3d4451",
    }
  }
}