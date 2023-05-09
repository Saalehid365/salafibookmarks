import React, { useContext, useState } from "react";
import Checkout from "../cart/checkout";
import { ShopContext } from "../shop-context";

const Baskettotals = () => {
  const cart = useContext(ShopContext);
  const { shipping, setShipping } = useState(0);

  const subtotal = cart.getTotalCost().toFixed(2) + shipping;
  console.log(subtotal);
  return (
    <div className="border mt-12 w-2/6 h-full flex flex-col items-start justify-evenly text-gray-600 mb-6 sm:border-0 sm:w-full">
      <p className="h-24 pl-6 text-4xl pt-6 sm:text-2xl">Basket totals</p>

      <div className="flex h-40 pt-6 ">
        <h2 className="w-28 font-semibold">Delivery</h2>
        <div className="flex flex-col items-start justify-start">
          <div className="">
            <input type="checkbox" className="mr-1" value={3}></input>
            <label htmlFor="standard">
              Standard Delivery &#40;3-5 Days&#41;: £3
            </label>
          </div>
          <div className="mt-4">
            <input type="checkbox" className="mr-1" value={5}></input>
            <label htmlFor="express">
              Next Day Delivery &#40;1-2 Days&#41;: £5
            </label>
          </div>
          <div className="mt-4">
            <input type="checkbox" className="mr-1" value={10}></input>
            <label htmlFor="express">
              International Delivery &#40;1-2 Days&#41;: £10
            </label>
          </div>
          <p className="text-red-500 text-xs font-bold">
            Please choose option upon checkout
          </p>
        </div>
      </div>
      <div className="flex h-12">
        <h2 className="w-28 font-semibold">Total</h2>
        <h3 className="w-40 font-semibold text-start text-blue-500">
          £{cart.getTotalCost().toFixed(2)}
        </h3>
      </div>
      <div className="flex w-full items-center justify-center h-24 sm:w-full">
        <Checkout />
      </div>
    </div>
  );
};

export default Baskettotals;
