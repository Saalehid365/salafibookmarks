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
        mainbg: "url('/src/assets/bookimg.jpeg')",
        contactus: "url('/src/assets/cusss.avif')",
      },
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
