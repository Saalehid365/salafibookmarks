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

      <div className="mt-4 sm:mt-24 border border-black rounded">
        <Link to="store" className=" h-10 p-2 ">
          <button className="w-32 text-heavyMetal">Shop now</button>
        </Link>
      </div>
    </div>
  );
};

export default MainHero;
