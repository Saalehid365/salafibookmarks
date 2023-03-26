import React from "react";
import Copyright from "../components/copyright";

const Footer = () => {
  return (
    <div className="flex flex-col h-96 justify-between items-center">
      <div className="flex flex-col justify-center items-center h-full">
        <p className="text-2xl">
          Salafi<span className="font-bold">Bookmarks</span>
        </p>
        <p className="mt-6">
          Providing the student with a tool to stop bending their books
        </p>
        <div className="flex">
          <button>F</button>
          <button>F</button>
          <button>F</button>
        </div>
      </div>
      <div className="flex flex-col justify-end h-8 border-t-2 w-full">
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
