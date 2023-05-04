import React from "react";
import { FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-axolotl sm:h3/4 sm:py-44 p-4 flex sm:flex-col sm:justify-center text-greenSpring mt-12 justify-between h-72 ">
      <div className="sm:h-40 flex flex-col sm:justify-between text-start  justify-evenly">
        <h2 className="sm:text-xl sm:w-60 sm:text-start text-3xl ">
          Providing bookmarks your proud to share
        </h2>
        <div>
          <h3 className="text-sm">4 Bonham Grove</h3>
          <h3 className="text-sm">Birmingham, B25 8RX</h3>
        </div>
        <h2 className="font-bold underline">info@salafibookmarks.com</h2>
      </div>
      <div className="sm:text-start sm:h-32 flex  sm:justify-between w-2/3 justify-evenly pt-12 sm:flex-row ">
        <div className="flex flex-col justify-evenly h-40 sm:flex sm:justify-start sm:h-32">
          <h2 className="text-xl font-bold underline">Hours/Days</h2>
          <h3 className="text-sm">Monday - Saturday </h3>
          <h3 className="text-sm">8am -7pm</h3>
        </div>
        <div className="flex flex-col justify-evenly h-40 sm:flex sm:justify-start sm:h-32">
          <h2 className="text-xl font-bold underline">Follow</h2>

          <div className="flex justify-evenly w-40 ">
            <FaInstagram
              href="https://www.instagram.com/salafibookmarks/?hl=en"
              target="_blank"
              className=" underline text-3xl cursor-pointer"
            />
            <FaTwitterSquare
              href="https://twitter.com/salafibookmarks?lang=en-GB"
              target="_blank"
              className=" underline text-3xl cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
