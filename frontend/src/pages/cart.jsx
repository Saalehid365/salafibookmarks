import React, { useContext } from "react";
import Baskettotals from "../cart/baskettotals";
import Carttable from "../cart/carttable";
import Remaining from "../cart/remaing";
import Searchbar from "../cart/searchbar";
import Carttitle from "../cart/carttitle";
import { ShopContext } from "../shop-context";
import Emptybasket from "../cart/emptybasket";

const Cartpage = () => {
  const cart = useContext(ShopContext);

  return (
    <div className="flex flex-col items-center justify-between    ">
      <Carttitle />
      <Searchbar />
      <Remaining />
      {cart.items <= 0 ? (
        <div>
          <Emptybasket />
        </div>
      ) : (
        <div className="flex justify-evenly w-full sm:flex-col">
          <Carttable />
          <Baskettotals />
        </div>
      )}
    </div>
  );
};

export default Cartpage;
