import React from "react";
import sideImg from "./collection.JPG";

const SideImg = () => {
  return (
    <div className="w-1/5 h-2/5 border-4 absolute right-2">
      <img alt="collection" src={sideImg} className="w-full h-full"></img>
    </div>
  );
};

export default SideImg;
