import React from "react";
import logo from "../navbar/logo.jpg";
const Logo = () => {
  return (
    <div
      className=" flex items-center justify-between w-40
    "
    >
      <img src={logo} className="h-14 w-8 rounded-md"></img>
      <div className="text-1xl font-bold flex flex-col items-start justify-center ml-2">
        <p className="font-mono text-gray-300">
          <span className="">S</span>alafi
        </p>
        <p className="font-mono text-gray-300">Bookmarks</p>
      </div>
    </div>
  );
};

export default Logo;
