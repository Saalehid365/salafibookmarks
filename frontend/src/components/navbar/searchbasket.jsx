import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShopContext } from "../../shop-context";

const Searchbasket = () => {
  const cart = useContext(ShopContext);

  //get count
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <div className="flex w-12 justify-evenly text-2xl text-greenSpring">
      <Link
        to="shoppingcart"
        className="flex items-center text-greenSpring relative"
      >
        <FaCartPlus />
        <div className="h-4 w-4 bg-red-600 text-xs rounded-xl flex items-center justify-center text-black absolute sm:bottom-3 bottom-4 left-5">
          {productsCount}
        </div>
        <div className="flex flex-col text-sm w-24 font-mono  sm:hidden">
          <p>My Cart</p>
        </div>
      </Link>
    </div>
  );
};

export default Searchbasket;
