/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mainTheme: {
          primary: '#f2f2f2',
          secondary: '#b8e419',
        },
      },
    ],
    trajectory: {
      primary: "#a991f7",
      secondary: "#f6d860",
      accent: "#37cdbe",
      neutral: "#3d4451",
    }
  }
}