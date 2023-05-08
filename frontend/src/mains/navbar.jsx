import React from "react";
import Logo from "../components/navbar/logo";
import Navlinks from "../components/navbar/nav-links";
import Searchbasket from "../components/navbar/searchbasket";
import Hamburger from "../components/navbar/hamburger";

const Navbar = () => {
  return (
    <div className="fixed flex justify-evenly items-center px-24 w-full  border-b-2 border-gray-500 bg-heavyMetal sm:flex sm:h-20 sm:px-6 sm:w-screen sm:justify-between  sm:z-10">
      <Hamburger />
      <Logo />
      <Navlinks />
      <Searchbasket />
    </div>
  );
};

export default Navbar;
