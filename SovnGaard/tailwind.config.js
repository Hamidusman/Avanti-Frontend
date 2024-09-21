/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    boxShadow: {
      inner: 'inset 0 2px 4px 0 rgba(118, 67, 230, 0.06)',
    },
    /**
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
     */
    extend: {
      colors: {
        primary: '#D4AF37',
        accent: '#f5d363',
        matte: '#28282B',
        gray: '#CED4DA'
      }
    },
  },
  plugins: [],
}

