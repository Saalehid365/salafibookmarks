import React, { useContext, useState } from "react";
import Checkout from "../cart/checkout";
import { ShopContext } from "../shop-context";

const Baskettotals = () => {
  const cart = useContext(ShopContext);
  const [shipping, setShipping] = useState(0);

  return (
    <div className="border mt-12 w-2/6 h-full flex flex-col items-start justify-evenly text-gray-600 mb-6">
      <p className="h-24 pl-6 text-4xl pt-6">Basket totals</p>
      <div className="flex h-20 pt-6">
        <h2 className="w-28 font-semibold">Subtotal</h2>
        <h3 className="w-40 text-gray-800 font-semibold">
          {cart.getTotalCost().toFixed(2)}
        </h3>
      </div>
      <div className="flex h-40 pt-6">
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
            <label for="standard">Standard Delivery (3-5 Days): £3</label>
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
            <label for="express">Express Priorty Delivery (1-2 Days): £5</label>
          </div>
        </div>
      </div>
      <div className="flex h-12">
        <h2 className="w-28 font-semibold">Total</h2>
        <h3 className="w-40 text-gray-800 font-semibold">
          {shipping + cart.getTotalCost().toFixed(2)}
        </h3>
      </div>
      <div className="flex w-full items-center justify-center h-24 ">
        <Checkout />
      </div>
    </div>
  );
};

export default Baskettotals;
