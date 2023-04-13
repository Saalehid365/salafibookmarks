import React from "react";
import { bookmarks } from "../bookmarks";
import Shopcard from "./shopcard";

const Storegrid = () => {
  return (
    <div className="bg-gray-100 w-full grid grid-rows-2 grid-cols-5 gap-4 px-6 py-12 ">
      {bookmarks.map((product, index) => (
        <Shopcard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Storegrid;
