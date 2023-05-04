import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../shop-context";

const Dropdown = () => {
  const toggleHamburger = useContext(ShopContext);
  const { toggleModal1, setToggleHam } = toggleHamburger;
  return (
    <div className="text-heavyMetal sm:bg-white sm:h-screen sm:z-30  sm:fixed sm:top-0 sm:w-screen  sm:flex sm:flex-col sm:items-center transform opacity-100 group-hover:translate-x-12 ">
      <div className=" sm:w-full sm:flex sm:justify-end pr-8 sm:pt-4 sm:text-end">
        <button className=" text-3xl" onClick={toggleModal1}>
          X
        </button>
      </div>
      <div className="flex flex-col items-center justify-evenly sm:pt-2 sm:text-3xl sm:h-2/3">
        <Link
          to="/"
          className="h-12 hover:border-b-2 border-greenSpring w-full text-start px-6 pt-4"
          onClick={() => setToggleHam(false)}
        >
          Home
        </Link>
        <Link
          to="store"
          className="h-12 hover:border-b-2 border-greenSpring  w-full text-start px-6 pt-4"
          onClick={() => setToggleHam(false)}
        >
          Store
        </Link>
        <Link
          to="/"
          className="h-12 hover:border-b-2 border-greenSpring  w-full text-start px-6 pt-4"
        >
          About
        </Link>
        <Link className="h-12 hover:border-b-2 border-greenSpring  w-full text-start px-6 pt-4">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
