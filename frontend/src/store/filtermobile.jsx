import React, { useContext, useState } from "react";
import { ShopContext } from "../shop-context";

const Filtermobile = () => {
  const filterSearch = useContext(ShopContext);
  const { filter, setFilter, setToggle, toggle, handleToggle } = filterSearch;

  return (
    <div className=" flex flex-col items-start pl-6 pt-6 h-96 justify-evenly ">
      <h2>Filter</h2>
      <p>{filter}</p>
      <select
        className="w-60 h-10 border px-2 bg-gray-100"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option>Color</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="burgandy">Burgandy</option>
        <option value="blue">Blue</option>
        <option value="navy">Navy</option>
        <option value="black">Black</option>
      </select>
      <select className="w-60 h-10 border px-2 bg-gray-100">
        <option>Language</option>
        <option>English</option>
        <option>Arabic</option>
      </select>
      <select className="w-60 h-10 border px-2 bg-gray-100">
        <option>Author</option>
        <option>Ibn Qayyim</option>
        <option>Ibn Sireen</option>
        <option>Ibn Taymiyyah</option>
        <option>Al- Hasan al-Basri</option>
      </select>
      <select className="w-60 h-10 border px-2 bg-gray-100">
        <option>In Stock</option>
      </select>

      <button onClick={handleToggle}> Apply filter</button>
    </div>
  );
};

export default Filtermobile;
