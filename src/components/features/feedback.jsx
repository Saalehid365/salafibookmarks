import React from "react";
import { FaUser } from "react-icons/fa";

const Feedback = () => {
  return (
    <div className="w-72 border h-40 flex flex-col items-start rounded-md">
      <div className=" bg-blue-300 h-12 w-12 rounded-full flex items-center justify-center">
        <FaUser className="text-3xl" />
      </div>
      <p>Name</p>
      <p>Feedback</p>
    </div>
  );
};

export default Feedback;
