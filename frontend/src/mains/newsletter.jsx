import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="bg-finlandia">
      <div className=" py-32 flex flex-col items-center justify-between mt-48 sm:mt-0">
        <div>
          <FaEnvelope className="w-32 h-32 text-yellow-100 sm:h-28 sm:w-28" />
        </div>
        <div className=" flex flex-col items-center justify-evenly text-heavyMetal sm:px-4">
          <p className="text-2xl">Newsletter</p>
          <p className="text-3xl sm:text-2xl">
            Sign up to our newsletter for the latest news and offers
          </p>
          <input
            className="h-12 rounded w-72 sm:h-12 my-6 pl-6"
            placeholder="Email Address"
          ></input>
          <p>
            we won't flood your inbox, and you might receive some discount
            vouchers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
