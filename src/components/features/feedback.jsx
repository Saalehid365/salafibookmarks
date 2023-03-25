import React from "react";
import { FaUser } from "react-icons/fa";

const Feedback = () => {
  return (
    <div className="w-72 border flex flex-col items-start rounded-md">
      <div className=" bg-blue-300 h-20 w-20 rounded-full flex items-center justify-center">
        <FaUser className="text-3xl" />
      </div>
      <p>Name</p>
      <p>Feedback</p>
    </div>
  );
};

export default Feedback;
