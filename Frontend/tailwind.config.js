/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "rgb(var(--dark))",
        lessdark: "rgb(var(--lessdark))",
        light: "rgb(var(--light))",
      }
    },
  },
  plugins: [],
}

