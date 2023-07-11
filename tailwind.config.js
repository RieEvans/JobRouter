/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '280px',
      // => @media (min-width: 280) { Mobile }
      'md': '620px',
      // => @media (min-width: 620px) { Table }
      'xl': '1280px',
      // => @media (min-width: 1280px) { Laptop }
      'xxl': '1280px',
      // => @media (min-width: 1280px) { Desktop }
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}