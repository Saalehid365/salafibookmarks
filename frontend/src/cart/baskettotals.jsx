import React, { useContext, useState } from "react";
import { ShopContext } from "../shop-context";
import { loadStripe } from "@stripe/stripe-js";
import { async } from "q";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API);
  }

  return stripePromise;
};

const Baskettotals = () => {
  const { cartItems, getTotal, totalAmount, completeAmount } =
    useContext(ShopContext);

  const [shipping, setShipping] = useState(0);

  const finalBalance = completeAmount + parseInt(shipping);

  const stripe = Number(finalBalance);

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cartItems }),
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
    <div className="w-full flex justify-end pr-40 mt-12 mb-40 ">
      <div className="flex flex-col w-2/5 border">
        <div className="bg-gray-200 w-full h-10 flex items-center justify-center">
          <h3>Basket totals</h3>
        </div>
        <div className="flex justify-evenly h-12 items-center">
          <h2 className="w-1/3 border-r-2 border-b-2 h-full pt-2">Subtotal</h2>
          <h3 className="w-2/3 text-start border-b-2 h-full pt-2 pl-2">
            £{completeAmount}
          </h3>
        </div>
        <div className="flex justify-evenly">
          <h2 className="w-1/3 h-72 border-r-2 pt-8 border-b-2">Shipping</h2>
          <div className="w-2/3 h-72 text-sm flex flex-col justify-evenly text-start border-b-2 pl-2">
            <div className="">
              <input
                type="radio"
                name="shipping"
                value={2}
                id="rad1"
                className="text-blue-600 mr-2"
                onChange={(e) => setShipping(e.target.value)}
              ></input>
              <label for="rad1" className="text-gray-800">
                UK Economy (FREE OVER £15):{" "}
                <span className="font-bold">£2</span>
              </label>
              <p className="text-gray-500">3-5 working days</p>
            </div>
            <div>
              <input
                type="radio"
                name="shipping"
                value={4}
                id="rad2"
                onChange={(e) => setShipping(e.target.value)}
                className="text-blue-600 mr-2"
              ></input>
              <label for="rad2" className="text-gray-800">
                UK Next Day Shipping (FREE OVER £50):
                <span className="font-bold">£4</span>
              </label>
              <p className="text-gray-500">
                1 working days ( orders before 12pm)
              </p>
            </div>
            <div>
              <input
                type="radio"
                name="shipping"
                value="0"
                id="rad3"
                className="text-blue-600 mr-2"
                onChange={(e) => setShipping(e.target.value)}
              ></input>
              <label for="rad3" className="text-gray-800">
                Local Collection: <span className="font-bold">FREE</span>
              </label>
              <p className="text-gray-500">local collection in Birmingham</p>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly h-10 items-center border-b-2">
          <h2 className="w-1/3 border-r-2 ">Total</h2>
          <h3 className="w-2/3 text-start pl-2">£{finalBalance}</h3>
        </div>
        <form
          className="h-14 flex items-center justify-center"
          action="/create-checkout-session"
          method="POST"
        >
          <button
            className="border-2 w-44 rounded-md bg-blue-500 text-white h-10 text-xl"
            type="submit"
            onClick={checkout}
          >
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Baskettotals;
