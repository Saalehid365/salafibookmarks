import React from "react";
import { FaCartPlus, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Searchbasket = () => {
  return (
    <div className="flex w-16 justify-between text-2xl text-gray-600">
      <FaSearch />
      <Link to="shoppingcart">
        <FaCartPlus />
      </Link>
    </div>
  );
};

export default Searchbasket;
