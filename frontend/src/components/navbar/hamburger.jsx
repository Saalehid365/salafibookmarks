import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { ShopContext } from "../../shop-context";

const Hamburger = () => {
  const toggleHamburger = useContext(ShopContext);
  const { toggleModal1 } = toggleHamburger;

  return (
    <div className="hidden sm:inline ">
      <FaBars className="text-gray-900 text-2xl" onClick={toggleModal1} />
    </div>
  );
};

export default Hamburger;
