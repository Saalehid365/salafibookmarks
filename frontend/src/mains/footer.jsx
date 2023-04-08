import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col h-96 justify-between items-center ">
      <div className="flex flex-col justify-evenly items-center h-full">
        <div className="flex flex-col text-yellow-700 ">
          <p className="mb-4">4 Bonham Grove</p>
          <p className="mb-4">Birmingham, United Kingdom, B25 8RX</p>
          <a href="www.idevelop365.co.uk" className="underline">
            Click for directions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
