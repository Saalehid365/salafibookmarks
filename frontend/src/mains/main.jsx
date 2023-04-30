import React from "react";
import { Link } from "react-router-dom";

const MainHero = () => {
  return (
    <div className="bg-mainbg h-[70vh] bg-bottom flex flex-col items-center justify-center bg-cover bg-no-repeat sm:w-screen sm:pb-6 sm:justify-start">
      <div className="text-white ">
        <h3 className="text-start text-2xl sm:hidden font-mono">Welcome to</h3>
        <h2 className="text-8xl sm:text-6xl sm:pt-16 text-heavyMetal">
          Salafi Bookmarks
        </h2>
      </div>
      <div className="text-white mt-24 text-xl font-serif border w-96 h-12 flex items-center justify-center rounded-md sm:w-60 sm:hidden">
        <h4>No more folding your pages</h4>
      </div>
      <div className=" sm:mt-24 border">
        <Link to="store" className="border border-black h-10 p-2 ">
          <button className="w-32">Shop now</button>
        </Link>
      </div>
    </div>
  );
};

export default MainHero;
