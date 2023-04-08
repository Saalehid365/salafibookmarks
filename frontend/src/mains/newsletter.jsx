import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className=" bg-yellow-600 ">
      <div className=" py-32 flex flex-col items-center justify-between mt-48 ">
        <div>
          <FaEnvelope className="w-44 h-44 text-yellow-100" />
        </div>
        <div className="h-44 flex flex-col justify-evenly text-yellow-100">
          <p className="text-2xl">Newsletter</p>
          <p className="text-3xl">
            Sign up to our newsletter for the latest news and offers
          </p>
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
