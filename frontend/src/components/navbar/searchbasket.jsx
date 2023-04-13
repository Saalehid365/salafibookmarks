import React, { useContext } from "react";
import { FaCartPlus, FaSearch } from "react-icons/fa";
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
    <div className="flex w-12 justify-evenly text-2xl text-gray-600">
      <Link to="shoppingcart" className="flex items-center">
        <FaCartPlus />
        <div className="flex flex-col text-sm w-20">
          <p>My Cart</p>
          <h3>({productsCount} items)</h3>
        </div>
      </Link>
    </div>
  );
};

export default Searchbasket;
