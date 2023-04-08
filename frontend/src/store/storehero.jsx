import React from "react";
import { FaArrowsAltV } from "react-icons/fa";

const Storehero = () => {
  return (
    <div className="bg-gray-300 h-24 flex justify-between items-center px-8">
      <div>
        <p className="text-3xl">Bookmarks</p>
      </div>
      <div className="flex items-centerpr">
        <FaArrowsAltV />
        <p className="uppercase s">sort by latest</p>
      </div>
    </div>
  );
};

export default Storehero;
