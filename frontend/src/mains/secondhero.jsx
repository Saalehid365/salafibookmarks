import React from "react";
import image1 from "../assets/hero3.png";
import { Link } from "react-router-dom";

const Secondhero = () => {
  return (
    <div className="bg-hero bg-fill bg-center m-0 h-96 pl-12  flex flex-col items-start justify-center">
      <h3 className="text-3xl text-start w-1/3 font-bold text-heavyMetal sm:text-xl sm:w-2/3">
        No need to use anything other than a salafi bookmarks to bring you back
        to your page
      </h3>
      <Link className="border border-axolotl bg-axolotl text-white text-sm w-28 h-6 mt-8 rounded sm:h-10 sm:flex sm:items-center sm:justify-center">
        Shop now
      </Link>
    </div>
  );
};

export default Secondhero;
