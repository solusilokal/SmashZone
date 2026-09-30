/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./smashzone_landing_page.tsx"
  ],
  theme: {
    extend: {
      colors: {
        accent: '#38bdf8',
        'accent-red': '#d31a22',
      }
    },
  },
  plugins: [],
}
