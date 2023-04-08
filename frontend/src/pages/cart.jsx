import React from "react";
import Baskettotals from "../cart/baskettotals";
import Carttable from "../cart/carttable";
import Remaining from "../cart/remaing";
import Searchbar from "../cart/searchbar";

const Cartpage = () => {
  return (
    <div className="flex flex-col items-center pt-24">
      <Searchbar />
      <Remaining />
      <Carttable />
      <Baskettotals />
    </div>
  );
};

export default Cartpage;
