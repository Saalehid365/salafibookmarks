/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        feature1: "url('/src/assets/blur.jpg')",
        bookmark1: "url('/src/assets/IMG_0278.JPG')",
      },
    },
  },
  plugins: [],
};
