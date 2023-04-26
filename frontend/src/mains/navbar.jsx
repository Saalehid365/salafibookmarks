import React from "react";
import Logo from "../components/navbar/logo";
import Navlinks from "../components/navbar/nav-links";
import Searchbasket from "../components/navbar/searchbasket";
import Hamburger from "../components/navbar/hamburger";

const Navbar = () => {
  return (
    <div className="flex justify-evenly items-center px-24 w-full h-16 border-b-2 border-gray-500 bg-black sm:flex sm:px-0">
      <Hamburger />
      <Logo />
      <Navlinks />
      <Searchbasket />
    </div>
  );
};

export default Navbar;
