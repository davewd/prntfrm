/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#00b4d8',
          hover: '#0096c7',
          light: '#90e0ef',
        },
      },
    },
  },
  plugins: [],
}

