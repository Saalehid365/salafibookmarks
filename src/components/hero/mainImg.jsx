import React from "react";
import worthy from "./libr.jpeg";

const MainImg = () => {
  return (
    <div className=" w-5/6 h-5/6  ">
      <img
        src={worthy}
        alt="main"
        className="border-blue-600 border w-full h-full rounded-md"
      ></img>
    </div>
  );
};

export default MainImg;
