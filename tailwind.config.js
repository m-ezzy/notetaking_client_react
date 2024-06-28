/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(20 158 202)",
        secondary: "#89CFF0",
      },
    },
  },
  plugins: [],
}
