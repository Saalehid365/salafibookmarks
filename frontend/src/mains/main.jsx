import React from "react";

const MainHero = () => {
  return (
    <div className="bg-mainbg h-[50vh] bg-center flex flex-col items-center justify-center bg-cover bg-no-repeat">
      <div className="text-white font-serif">
        <h3 className="text-start text-2xl">Welcome to</h3>
        <h2 className="text-8xl">Salafi Bookmarks</h2>
      </div>
      <div className="text-white mt-24 text-xl font-serif border w-96 h-12 flex items-center justify-center rounded-md">
        <h4>No more folding your pages</h4>
      </div>
    </div>
  );
};

export default MainHero;
