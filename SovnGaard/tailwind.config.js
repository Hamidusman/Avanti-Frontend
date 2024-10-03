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
      },<a href="https://storyset.com/web">Web illustrations by Storyset</a>
    },
     */
    extend: {
      colors: {
        primary: '#FFD700',
        accent: '#f5d363',
        matte: '#28282B',
        gray: '#66666d',
        smoke: '#f5f5f5'
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px', 
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

