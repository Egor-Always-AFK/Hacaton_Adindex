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
          primary: '#2f7fb0',
          secondary: '#b8e419',
          "base-100": "#ffffff",
          "base-200": "#f2f2f2",
          error: "#d0363d",
          accent: "#2f7fb0",
          neutral: "#1b1b1b",
        },
      },
    ],
  }
}