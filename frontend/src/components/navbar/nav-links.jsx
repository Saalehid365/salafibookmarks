import React from "react";
import { Link } from "react-router-dom";

const Navlinks = () => {
  return (
    <div className="flex justify-between w-1/3 h-full items-center">
      <Link
        to="/"
        className="hover:border-b-2 border-yellow-500 h-full flex items-center w-1/5 justify-center"
      >
        Home
      </Link>
      <Link
        to="store"
        className="hover:border-b-2 border-yellow-500 h-full flex items-center w-1/5 justify-center"
      >
        Store
      </Link>
      <Link className="hover:border-b-2 border-yellow-500 h-full flex items-center w-1/5 justify-center">
        About
      </Link>
      <Link className="hover:border-b-2 border-yellow-500 h-full flex items-center w-1/5 justify-center">
        Contact
      </Link>
    </div>
  );
};

export default Navlinks;
