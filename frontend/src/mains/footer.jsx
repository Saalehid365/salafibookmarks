import React from "react";

const Footer = () => {
  return (
    <div className="bg-axolotl sm:h-96 p-4 flex flex-col justify-evenly text-greenSpring">
      <div className="h-40 flex flex-col justify-between text-start">
        <h2 className="text-xl w-60 text-start">
          Providing bookmarks your proud to share
        </h2>
        <div>
          <h3 className="text-sm">4 Bonham Grove</h3>
          <h3 className="text-sm">Birmingham, B25 8RX</h3>
        </div>
        <h2 className="font-bold">info@salafibookmarks.com</h2>
      </div>
      <div className="text-start h-40 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold">Hours/Days</h2>
          <h3 className="text-sm">Monday - Saturday </h3>
          <h3 className="text-sm">8am -7pm</h3>
        </div>
        <div>
          <h2 className="text-xl font-bold">Follow</h2>
          <h3 className="text-sm">Instagram</h3>
          <h3 className="text-sm">Twitter</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
