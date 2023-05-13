import React, { useContext } from "react";
import { ShopContext } from "../shop-context";

const Checkout = () => {
  const cart = useContext(ShopContext);

  const checkout = async (e) => {
    e.preventDefault();
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
    <form
      className="bg-black w-2/4 text-white h-12 text-sm uppercase sm:w-72 rounded-md flex justify-center items-center"
      action="/create-checkout-session"
      method="POST"
    >
      <button type="submit" onClick={checkout}>
        Proceed to checkout
      </button>
    </form>
  );
};

export default Checkout;
