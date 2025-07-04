/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          to: {
            backgroundPosition: 'var(--bg-size) 0',
          },
        },
      },
      colors: {
        'background': {
          DEFAULT: "#012233",
          dark: "#111827",
          light: "#FAF8F0"
        },
        'primary': {
          DEFAULT: "#FAF8F0",
          dark: "#FAF8F0",
          light: "#001B29"
        },
        'secondary': {
          DEFAULT: "#F7F197",
          dark: "#475569",
          light: "#D8CBB7"
        },
      }
    }
  },
  plugins: [],
}

// #E8D9B9
// #E6E0C3
// #D8CBB7
// #475569
