import containerQueries from '@tailwindcss/container-queries'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./app/**/*.{vue,js,ts}', './components/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      containers: {
        sm: '30rem',
        lg: '54rem',
      },
      colors: {
        primary: '#f9f506',
        'primary-content': '#1c1c0d',
        'background-light': '#f8f8f5',
        'background-dark': '#23220f',
        'text-main': '#1c1c0d',
        'text-secondary': '#57574b',
        'text-muted': '#57574b',
        'border-color': '#e6e6da',
        'neutral-dark': '#1c1c0d',
        'neutral-light': '#fcfcf8',
      },
      fontFamily: {
        display: ['Spline Sans', 'Noto Sans JP', 'sans-serif'],
        body: ['Spline Sans', 'Noto Sans JP', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
        full: '9999px',
      },
    },
  },
  plugins: [containerQueries],
}
