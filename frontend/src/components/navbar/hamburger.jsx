import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { ShopContext } from "../../shop-context";

const Hamburger = () => {
  const toggleHamburger = useContext(ShopContext);
  const { toggleModal1, toggleHam } = toggleHamburger;
  console.log(toggleHam);

  return (
    <div className="hidden sm:inline ">
      <FaBars className="text-gray-200 text-2xl" onClick={toggleModal1} />
    </div>
  );
};

export default Hamburger;
