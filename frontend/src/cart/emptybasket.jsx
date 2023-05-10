import React from "react";
import cart from "../assets/shopping-cart.png";
import { Link } from "react-router-dom";

const Emptybasket = () => {
  return (
    <div className="mt-40 ">
      <div className="flex flex-col items-center px-2 font-mono">
        <img src={cart} className="h-40 w-40"></img>
        <h2 className="mt-8 text-2xl text-gray-600">
          Afwan! Your cart appears to be empty!
        </h2>
        <h3 className="mt-4 text-2xl text-gray-600">
          buy a bookmark dont bookmark the page
        </h3>
        <Link
          to="/store"
          className="mt-6 w-32 bg-axolotl rounded-md h-8 flex items-center justify-center text-white text-xl"
        >
          Shop{" "}
        </Link>
      </div>
    </div>
  );
};

export default Emptybasket;
