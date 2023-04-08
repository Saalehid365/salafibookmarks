import React from "react";
import { bookmarks } from "../bookmarks";
import Shopcard from "./shopcard";

const Storegrid = () => {
  return (
    <div className="bg-gray-100 w-full grid grid-rows-2 grid-cols-4 gap-2 px-6 py-12 ">
      {bookmarks.map((card) => (
        <Shopcard card={card} />
      ))}
    </div>
  );
};

export default Storegrid;
