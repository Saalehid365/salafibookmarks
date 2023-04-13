import product1 from "../src/assets/product1.JPG";
import product2 from "../src/assets/product2.JPG";
import product3 from "../src/assets/product3.JPG";
import product4 from "../src/assets/product4.JPG";

export const bookmarks = [
  {
    id: "price_1MvTGvBEUJeTlFCNwT13id2n",
    Stripe: "price_1MuI3YBEUJeTlFCNM1lKalBf",
    Quote: "this knowledge is matter of deen",
    Author: "Ibn Sireen",
    Price: 2.99,
    Color: "Blue",
    image: product1,
  },
  {
    id: "price_1MuI6aBEUJeTlFCNWkryFf4M",
    Quote: "if a statement of mine opposes...",
    Author: "Imaam maalik",
    Price: 1.99,
    Color: "Red",
    image: product2,
  },
  {
    id: "price_1MtrI2BEUJeTlFCNfO6kHEqX",
    Quote: "Guidance ",
    Author: "Ibn Mubarak",
    Price: 2.99,
    Color: "Yellow",
    image: product3,
  },
  {
    id: 4,
    Quote: "Guidance ",
    Author: "Ibn Mubarak",
    Price: 2.99,
    Color: "Yellow",
    image: product4,
  },
  {
    id: 5,
    Quote: "Guidance ",
    Author: "Ibn Mubarak",
    Price: 2.99,
    Color: "Yellow",
    image: product4,
  },
  {
    id: 11,
    Quote: "Guidance ",
    Author: "Ibn Mubarak",
    Price: 2.99,
    Color: "Yellow",
    image: product2,
  },
  {
    id: 6,
    Quote: "Guidance ",
    Author: "Ibn Mubarak",
    Price: 2.99,
    Color: "Yellow",
    image: product1,
  },
  {
    id: 7,
    Quote: "Guidance ",
    Author: "Ibn Mubarak",
    Price: 2.99,
    Color: "Yellow",
    image: product2,
  },
  {
    id: 8,
    Quote: "Guidance ",
    Author: "Ibn Mubarak",
    Price: 2.99,
    Color: "Yellow",
    image: product4,
  },
  {
    id: 9,
    Quote: "Guidance ",
    Author: "Ibn Mubarak",
    Price: 2.99,
    Color: "Yellow",
    image: product2,
  },
  {
    id: 10,
    Quote: "Guidance ",
    Author: "Ibn Mubarak",
    Price: 2.99,
    Color: "Yellow",
    image: product3,
  },
];

function getProductData(id) {
  let productData = bookmarks.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { getProductData };
