/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        netflix: {
          red: '#e50914',
          black: '#000000',
          dark: '#141414',
          gray: {
            100: '#f3f3f3',
            200: '#e5e5e5',
            300: '#999999',
            400: '#737373',
            500: '#564d4d',
            600: '#333333',
            700: '#222222',
            800: '#181818',
            900: '#0f0f0f'
          }
        }
      },
      fontFamily: {
        'netflix': ['Netflix Sans', 'Helvetica Neue', 'Segoe UI', 'Roboto', 'Ubuntu', 'sans-serif']
      },
      backgroundImage: {
        'netflix-bg': "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2740%27 height=%2740%27 viewBox=%270 0 40 40%27%3E%3Cg fill=%27%23000%27 fill-opacity=%270.03%27%3E%3Cpath d=%27M0 0h40v40H0V0z%27/%3E%3C/g%3E%3C/svg%3E')"
      }
    },
  },
  plugins: [],
}