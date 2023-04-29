import React, { useContext, useState } from "react";
import Checkout from "../cart/checkout";
import { ShopContext } from "../shop-context";

const Baskettotals = () => {
  const cart = useContext(ShopContext);
  const [shipping, setShipping] = useState("");
  const balance = cart.getTotalCost() + cart.getTotalCost();
  console.log(balance);

  return (
    <div className="border mt-12 w-2/6 h-full flex flex-col items-start justify-evenly text-gray-600 mb-6 sm:border-0 sm:w-full">
      <p className="h-24 pl-6 text-4xl pt-6 sm:hidden">Basket totals</p>
      <div className="flex h-20 pt-6 sm:border-t-2 sm:border-b-2 sm:w-96">
        <h2 className="w-28 font-semibold">Subtotal</h2>
        <h2 className="hidden sm:inline">£1234</h2>
      </div>
      <div className="flex h-40 pt-6 sm:hidden">
        <h2 className="w-28 font-semibold">Delivery</h2>
        <div className="flex flex-col items-start">
          <div className="pl-12 mb-6">
            <input
              type="radio"
              id="standard"
              className="w-6"
              name="delivery"
              value={3}
              onChange={(e) => setShipping(parseInt(e.target.value))}
            ></input>
            <label htmlFor="standard">Standard Delivery (3-5 Days): £3</label>
          </div>
          <div className="pl-12">
            <input
              type="radio"
              id="express"
              className="w-6"
              name="delivery"
              value={5}
              onChange={(e) => setShipping(e.target.value)}
            ></input>
            <label htmlFor="express">
              Express Priorty Delivery (1-2 Days): £5
            </label>
          </div>
        </div>
      </div>
      <div className="flex h-12 sm:hidden">
        <h2 className="w-28 font-semibold">Total</h2>
        <h3 className="w-40 text-gray-800 font-semibold">
          {shipping + cart.getTotalCost()}
        </h3>
      </div>
      <div className="flex w-full items-center justify-center h-24 sm:w-full">
        <Checkout />
      </div>
    </div>
  );
};

export default Baskettotals;
