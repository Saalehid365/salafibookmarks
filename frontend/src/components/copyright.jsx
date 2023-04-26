import React from "react";
import { Link } from "react-router-dom";

import { FaCamera, FaFacebook, FaTwitch } from "react-icons/fa";

const Copyright = () => {
  return (
    <div className="mt-auto flex justify-between text-xs bg-gray-100 h-full items-center border-t-2 sm:w-screen">
      <div className="flex items-center pl-12">
        <FaCamera className="text-lg mx-2" />
        <FaTwitch className="text-lg mx-2" />
        <FaFacebook className="text-lg mx-2" />
        <p>Copyright SalafiBookmarks Designed and Developed by</p>
        <button>ID365</button>
      </div>
      <div className=" pr-44 text-base w-2/3 flex justify-evenly sm:hidden">
        <Link>Contact</Link>
        <Link>Wholesale Application Form</Link>
        <Link>Privacy Policy</Link>
      </div>
    </div>
  );
};

export default Copyright;
