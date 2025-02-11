/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [], 
  theme: {
    extend: {
      colors: {
        'background': {
          DEFAULT: "#012233",
          dark: "#012233",
          light: "#FAF8F0"
        },
        'text-primary': {
          DEFAULT: "#FAF8F0",
          dark: "#FAF8F0",
          light: "#003049"
        },
        'text-secondary': {
          DEFAULT: "#F7F197",
          dark: "#F7F197",
          light: "#E03047"
        },
      }
    }
  },
  plugins: [],
} 