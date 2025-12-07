/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        sand: {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#e8e4dd',
          300: '#d9d3c8',
          400: '#c4baa9',
          500: '#a89c88',
        },
        ocean: {
          50: '#f0f7f9',
          100: '#ddeef3',
          200: '#b8dce6',
          300: '#7fc0d4',
          400: '#4a9fb8',
          500: '#2b7a92',
        },
      },
    },
  },
  plugins: [],
}
