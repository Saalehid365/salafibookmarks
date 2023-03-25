import React from "react";

const Navlinks = () => {
  return (
    <div className="flex justify-between w-1/3 h-full items-center">
      <p className="hover:border-b-2 border-blue-700 h-full flex items-center w-1/5 justify-center">
        Home
      </p>
      <p className="hover:border-b-2 border-blue-700 h-full flex items-center w-1/5 justify-center">
        Store
      </p>
      <p className="hover:border-b-2 border-blue-700 h-full flex items-center w-1/5 justify-center">
        About
      </p>
      <p className="hover:border-b-2 border-blue-700 h-full flex items-center w-1/5 justify-center">
        Contact
      </p>
    </div>
  );
};

export default Navlinks;
