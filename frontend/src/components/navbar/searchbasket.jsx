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
      <Link to="shoppingcart" className="flex items-center text-greenSpring">
        <FaCartPlus />
        <div className="flex flex-col text-sm w-24 font-mono ml-2 sm:hidden">
          <p>My Cart</p>
          {productsCount <= 0 ? <></> : <h3>({productsCount} items) </h3>}
        </div>
      </Link>
    </div>
  );
};

export default Searchbasket;
