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
          <div className="flex justify-center items-center w-full">
            <input
              className="h-12 rounded w-60 sm:h-12 my-6 pl-6 mr-2"
              placeholder="Email Address"
            ></input>
            <button className="uppercase border border-greenSpring h-12 w-24 rounded text-greenSpring">
              Sign up
            </button>
          </div>
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
