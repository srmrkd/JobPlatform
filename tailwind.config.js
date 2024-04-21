/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {/* Use a font other than default font */
        sans: ['Roboto', 'sans-serif']
      },
      gridTemplateColumns: {/* For the details page */
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
}

