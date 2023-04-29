import React from "react";

const MainHero = () => {
  return (
    <div className="bg-mainbg h-[50vh] bg-center flex flex-col items-center justify-center bg-cover bg-no-repeat sm:w-screen sm:pb-6 sm:pt-12">
      <div className="text-white font-serif">
        <h3 className="text-start text-2xl sm:hidden">Welcome to</h3>
        <h2 className="text-8xl sm:text-6xl sm:pt-16">Salafi Bookmarks</h2>
      </div>
      <div className="text-white mt-24 text-xl font-serif border w-96 h-12 flex items-center justify-center rounded-md sm:w-60 sm:h-24">
        <h4>No more folding your pages</h4>
      </div>
    </div>
  );
};

export default MainHero;
