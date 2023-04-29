import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../shop-context";

const Dropdown = () => {
  const toggleHamburger = useContext(ShopContext);
  const { toggleModal1, setToggleHam } = toggleHamburger;
  return (
    <div className="sm:bg-white sm:h-full sm:fixed sm:w-screen sm:pt-12 sm:flex sm:flex-col transform opacity-100 group-hover:translate-x-12">
      <div className="sm:flex sm:justify-end pr-8 pt-14">
        <button className=" text-3xl" onClick={toggleModal1}>
          X
        </button>
      </div>
      <div className="flex flex-col items-start justify-evenly">
        <Link
          to="/"
          className="h-12 hover:bg-gray-200 w-full text-start px-6 pt-4"
          onClick={() => setToggleHam(false)}
        >
          Home
        </Link>
        <Link
          to="store"
          className="h-12 hover:bg-gray-200 w-full text-start px-6 pt-4"
          onClick={() => setToggleHam(false)}
        >
          Store
        </Link>
        <Link
          to="/"
          className="h-12 hover:bg-gray-200 w-full text-start px-6 pt-4"
        >
          About
        </Link>
        <Link className="h-12 hover:bg-gray-200 w-full text-start px-6 pt-4">
          Contact
        </Link>
        <Link className="h-12 hover:bg-gray-200 w-full text-start px-6 pt-4">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
