/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'farming-green': '#22c55e',
        'farming-dark-green': '#16a34a',
        'soil-brown': '#a16207',
        'weather-blue': '#3b82f6',
        'alert-red': '#ef4444',
        'alert-yellow': '#eab308',
        'alert-info': '#0ea5e9',
      },
      fontFamily: {
        'bengali': ['Noto Sans Bengali', 'SolaimanLipi', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
