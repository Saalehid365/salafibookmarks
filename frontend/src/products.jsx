import product1 from "./assets/blur.jpg";
import product2 from "./assets/bulb.jpeg";
import product3 from "./assets/cuss.avif";

export const products = [
  {
    id: "price_1MvNkkBEUJeTlFCNUTN8dOhO",
    Quote:
      "Ikhlaas is the way to salvation, Islam is the ship to safety and Eeman is the sea",
    Author: "Ibn Al-Qayyim",
    Reference: "Dar Miftah as-Sa'ada",
    Price: 1.99,
    Color: "yellow",
    image: product1,
    title: "ikhlaas-bookmark",
    topseller: "yes",
    price: 19999,
  },
  {
    id: "123",
    Quote:
      "Ikhlaas is the way to salvation, Islam is the ship to safety and Eeman is the sea",
    Author: "Ibn Al-Qayyim",
    Reference: "Dar Miftah as-Sa'ada",
    Price: 1.99,
    Color: "blue",
    image: product2,
    title: "ikhlaas-bookmark",
    price: 29999,
  },
  {
    id: "2",
    Quote:
      "Ikhlaas is the way to salvation, Islam is the ship to safety and Eeman is the sea",
    Author: "Ibn Al-Qayyim",
    Reference: "Dar Miftah as-Sa'ada",
    Price: 1.99,
    Color: "navy",
    image: product3,
    title: "ikhlaas-bookmark",
    price: 39999,
  },
];

const stripe = require("stripe")("process.env.REACT_APP_TEST");

const product = await stripe.products.create({
  name: "Gold Special",
});
