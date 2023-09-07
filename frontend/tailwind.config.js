/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'spotify-green': 'rgb(30, 215, 96)', 
        'white-smoke': '#F5F5F5',
        'dark-gray': 'rgb(25, 25, 25)',
        'dark-dark-gray': 'rgb(18, 18, 18)',
      },
    },
  },
  plugins: [],
}

