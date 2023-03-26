import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const NavSearch = () => {
  const [toggle, setToggle] = useState(false);

  const handletoggle = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className="
    "
    >
      <div className="flex min-w-full items-center">
        {toggle && (
          <input className="border-2 rounded-md w-72 h-8 mr-4 "></input>
        )}
        <FaSearch
          className="text-2xl text-gray-400 hover:cursor-pointer"
          onClick={handletoggle}
        />
      </div>
    </div>
  );
};

export default NavSearch;
