import React from "react";

const Footer = () => {
  return (
    <div className="bg-axolotl sm:h-96 p-4 flex sm:flex-col sm:justify-evenly text-greenSpring mt-12 justify-between h-72">
      <div className="sm:h-40 flex flex-col sm:justify-between text-start w-96 justify-evenly">
        <h2 className="sm:text-xl sm:w-60 sm:text-start text-3xl ">
          Providing bookmarks your proud to share
        </h2>
        <div>
          <h3 className="text-sm">4 Bonham Grove</h3>
          <h3 className="text-sm">Birmingham, B25 8RX</h3>
        </div>
        <h2 className="font-bold underline">info@salafibookmarks.com</h2>
      </div>
      <div className="sm:text-start sm:h-40 flex sm:flex-col sm:justify-between w-2/3 justify-evenly pt-12">
        <div className="flex flex-col justify-evenly h-40">
          <h2 className="text-xl font-bold underline">Hours/Days</h2>
          <h3 className="text-sm">Monday - Saturday </h3>
          <h3 className="text-sm">8am -7pm</h3>
        </div>
        <div className="flex flex-col justify-evenly h-40">
          <h2 className="text-xl font-bold underline">Follow</h2>
          <h3 className="text-sm">Instagram</h3>
          <h3 className="text-sm">Twitter</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
