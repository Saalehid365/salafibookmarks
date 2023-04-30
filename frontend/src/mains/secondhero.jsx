import React from "react";
import image1 from "../assets/hero3.png";
import { Link } from "react-router-dom";

const Secondhero = () => {
  return (
    <div className="bg-hero bg-cover bg-center m-0 h-72 pl-12 pt-12 flex flex-col items-start">
      <h3 className="text-start w-96 font-extrabold text-heavyMetal ">
        No need to use anything other than a salafi bookmarks to bring you back
        to your page
      </h3>
      <Link className="border border-axolotl bg-axolotl text-white text-sm w-28 h-6 mt-8 rounded">
        Shop now
      </Link>
    </div>
  );
};

export default Secondhero;
