import React from "react";
import Baskettotals from "../cart/baskettotals";
import Carttable from "../cart/carttable";
import Remaining from "../cart/remaing";
import Searchbar from "../cart/searchbar";
import Carttitle from "../cart/carttitle";

const Cartpage = () => {
  return (
    <div className="flex flex-col items-center justify-between sm:pt-24   ">
      <Carttitle />
      <Searchbar />
      <Remaining />
      <div className="flex justify-evenly w-full sm:flex-col">
        <Carttable />
        <Baskettotals />
      </div>
    </div>
  );
};

export default Cartpage;
