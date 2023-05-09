import React, { useContext } from "react";
import { ShopContext } from "../shop-context";
import { FaSort, FaSlidersH } from "react-icons/fa";
import Filtermobile from "./filtermobile";

const Filtermenu = () => {
  const filterSearch = useContext(ShopContext);
  const { setFilter, toggle, handleToggle } = filterSearch;

  return (
    <div className="w-1/5 border-r-2 sm:w-screen sm:h-20 sm:border-none font-light">
      <div className="h-40  flex flex-col items-start pt-6 pl-6 border-b-4 sm:flex sm:flex-row sm:items-center sm:h-12 sm:pt-0 sm:justify-evenly sm:w-96 sm:border-0">
        <FaSlidersH
          onClick={handleToggle}
          className="hidden sm:inline sm:h-8 sm:w-8 sm:p-1 sm:rounded-md sm:bg-gray-200 sm:text-xs"
        />
        <div className="flex items-center">
          <FaSort className="text-xs" />
          <h2 className="uppercase ml-2 ">Sort by</h2>
        </div>
        <select className="w-60 h-10 mt-4 border px-2 bg-gray-100 sm:mt-0">
          <option>Price (low to high)</option>
          <option>Price (high to low)</option>
        </select>
      </div>
      {toggle && <div>{<Filtermobile />}</div>}
      <div className=" flex flex-col items-start pl-6 pt-6 h-96 justify-evenly sm:hidden">
        <h2 className="uppercase">Filter by</h2>
        <select
          className="w-60 h-10 border px-2 bg-gray-100"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>Any Color</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="burgandy">Burgandy</option>
          <option value="blue">Blue</option>
          <option value="navy">Navy</option>
          <option value="black">Black</option>
        </select>
        <select className="w-60 h-10 border px-2 bg-gray-100">
          <option>Any Language</option>
          <option>English</option>
          <option>Arabic</option>
        </select>
        <select className="w-60 h-10 border px-2 bg-gray-100">
          <option>Any Author</option>
          <option>Ibn Qayyim</option>
          <option>Ibn Sireen</option>
          <option>Ibn Taymiyyah</option>
          <option>Al- Hasan al-Basri</option>
        </select>
        <button className="h-10 w-24 bg-gray-300" onClick={handleToggle}>
          {" "}
          Apply{" "}
        </button>
      </div>
    </div>
  );
};

export default Filtermenu;
