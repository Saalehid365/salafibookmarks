import React from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="w-2/3 border rounded-md mt-12 ">
      <div className="flex items-center">
        <FaSearch className="text-gray-400 text-3xl font-light pl-2" />
        <input
          className="h-8 pl-2 text-1xl italic font-extralight w-full "
          placeholder="enter search"
        ></input>
      </div>
    </div>
  );
};

export default Searchbar;
