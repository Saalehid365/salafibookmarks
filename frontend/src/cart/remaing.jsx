import React, { useContext } from "react";
import { FaInfo } from "react-icons/fa";
import { ShopContext } from "../shop-context";

const Remaining = () => {
  const { completeAmount } = useContext(ShopContext);
  const balance = 15;
  const remaining = balance - completeAmount;

  return (
    <div className="border flex justify-between w-4/5 mt-10 h-12 ">
      <div className="flex items-center">
        <FaInfo className="text-blue-500 pl-2" />
        {remaining > 0 ? (
          <h3 className="text-sm pl-4 font-bold">
            you are only £ away from free delivery
          </h3>
        ) : (
          <h3 className=" text-sm pl-4 font-bold">
            you qualify for FREE delivery
          </h3>
        )}
      </div>
      <div className="flex items-center p-2 ">
        <button className="h-8 bg-blue-500 rounded-md p-1 text-white uppercase text-xs">
          Continue shopping
        </button>
      </div>
    </div>
  );
};

export default Remaining;
