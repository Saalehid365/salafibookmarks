import React, { useContext } from "react";
import logo from "../navbar/logo.jpg";
import { Link } from "react-router-dom";
import { ShopContext } from "../../shop-context";

const Logo = () => {
  const toggleHamburger = useContext(ShopContext);

  const { toggleModal1, setToggleHam } = toggleHamburger;

  return (
    <Link
      to="/"
      className=" flex items-center justify-between w-40 sm:w-14
    "
      onClick={() => setToggleHam(false)}
    >
      <img src={logo} alt="logo" className="h-14 w-14 rounded-md"></img>
      <div className="text-1xl font-bold flex flex-col items-start justify-center ml-2 sm:hidden">
        <p className="font-mono text-gray-300">
          <span className="">S</span>alafi
        </p>
        <p className="font-mono text-gray-300">Bookmarks</p>
      </div>
    </Link>
  );
};

export default Logo;
