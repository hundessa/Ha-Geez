/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   playfair: ["Manufacturing Consent", "system-ui"],
      // },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
      },
    },
  },
  plugins: [],
};

