import React from "react";
import Topgrid from "./topgrid";
import { Link } from "react-router-dom";

const Topsels = () => {
  return (
    <div className=" h-full flex flex-col justify-evenly">
      <h2 className="text-5xl mb-24 sm:text-3xl sm:pt-6">Top Sellers</h2>
      <Topgrid />
      <div className=" mt-12 ">
        <Link
          to="store"
          className="border px-6 py-2 bg-black text-white rounded-md"
        >
          View all products
        </Link>
      </div>
    </div>
  );
};

export default Topsels;
