/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#053D31",
        accent: "#9B6B43",
      },
      height: {
        "screen-hero": "calc(100vh - 72px)",
      },
    },
  },
  plugins: [],
};
