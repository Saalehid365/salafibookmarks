import React from "react";

const WhatweCard = (props) => {
  const { order1, order2, order3 } = props;
  return (
    <div className="flex items-center justify-center border-b-2 border-r-2 pr-4 h-28">
      <p className="text-4xl text-gray-300 mr-4">{order1}</p>
      <div className="flex flex-col items-start">
        <p className="text-gray-500">{order2}</p>
        <p className="text-gray-600">{order3}</p>
      </div>
    </div>
  );
};

export default WhatweCard;
