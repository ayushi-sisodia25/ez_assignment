/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        base: '0.9rem',
      },
      
      screens: {
        mobile: "480px",
        tablet: "720px",
        laptop: "1080px",
        ipad: "1366px",
        macbook: "1440px",
      },
      fontFamily: {
        heading: ['"Island Moments"', "cursive"],
        subHeading: ['"Halant"', "serif"],
        text: ['"Instrument Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
