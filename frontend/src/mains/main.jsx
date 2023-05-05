import React from "react";
import { Link } from "react-router-dom";

const MainHero = () => {
  return (
    <div className="bg-mainbg sm:h-[70vh  ] h-[94vh] bg-center flex flex-col items-center justify-center bg-cover bg-no-repeat sm:w-screen sm:pb-6 sm:justify-start">
      <div className="text-white ">
        <h3 className="text-start text-2xl sm:hidden font-mono text-heavyMetal">
          Welcome to
        </h3>
        <h2 className="text-8xl sm:text-6xl sm:pt-16 text-heavyMetal">
          Salafi Bookmarks
        </h2>
      </div>

      <Link
        to="store"
        className=" h-8 w-28 p-2 bg-axolotl rounded flex justify-center mt-12 items-center text-white"
      >
        Shop now
      </Link>
    </div>
  );
};

export default MainHero;
