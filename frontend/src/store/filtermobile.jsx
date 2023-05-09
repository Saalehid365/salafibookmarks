import React, { useContext } from "react";
import { ShopContext } from "../shop-context";

const Filtermobile = () => {
  const filterSearch = useContext(ShopContext);
  const { setFilter, handleToggle } = filterSearch;

  return (
    <div className=" flex flex-col items-start pl-6 pt-6 h-screen pb-96 justify-evenly shadow bg-slate-100">
      <div className=" relative -top-10 mt-5 left-72">
        <p className="text-2xl hover:cursor-pointer" onClick={handleToggle}>
          X
        </p>
      </div>
      <h2 className="font-bold">Filter by Color</h2>

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
      <h2 className="font-bold">Filter by Language</h2>
      <select className="w-60 h-10 border px-2 bg-gray-100">
        <option>Language</option>
        <option>English</option>
        <option>Arabic</option>
      </select>
      <h2 className="font-bold">Filter by Author</h2>
      <select className="w-60 h-10 border px-2 bg-gray-100">
        <option>Author</option>
        <option>Ibn Qayyim</option>
        <option>Ibn Sireen</option>
        <option>Ibn Taymiyyah</option>
        <option>Al- Hasan al-Basri</option>
      </select>

      <button className="h-10 w-24 bg-gray-300 mt-4" onClick={handleToggle}>
        {" "}
        Apply{" "}
      </button>
    </div>
  );
};

export default Filtermobile;
