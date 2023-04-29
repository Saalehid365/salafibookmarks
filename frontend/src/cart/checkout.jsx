import React, { useContext } from "react";
import { ShopContext } from "../shop-context";

const Checkout = () => {
  const cart = useContext(ShopContext);

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  return (
    <button
      onClick={checkout}
      className="bg-black w-2/3 text-white h-12 text-sm uppercase sm:w-96"
    >
      Proceed to checkout
    </button>
  );
};

export default Checkout;
