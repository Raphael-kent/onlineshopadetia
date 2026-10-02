/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f5',
          100: '#e9f0eb',
          200: '#d5e2da',
          300: '#b8cfc1',
          400: '#8fae9b',
          500: '#7d9e8a',
          600: '#73947f',
          700: '#5d7a68',
        },
        krem: {
          50: '#fbfaf7',
          100: '#f7f5f0',
          200: '#efebe2',
          300: '#e3ded2',
        },
      },
    },
  },
  plugins: [],
}