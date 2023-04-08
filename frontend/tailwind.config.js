/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        feature1: "url('/src/assets/blurbook.avif')",
        bookmark1: "url('/src/assets/IMG_0278.JPG')",
        background1: "url('/src/assets/IMG_0279.jpg')",
        library1: "url('/src/assets/library.jpeg')",
        image1: "url('/src/assets/inkpot.jpeg')",
        image2: "url('/src/assets/book12.avif')",
      },
    },
  },
  plugins: [],
};
