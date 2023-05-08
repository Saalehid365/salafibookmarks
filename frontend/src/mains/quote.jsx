import React from "react";

const Quote = () => {
  return (
    <div className="h-40  w-4/6 flex flex-col items-start justify-evenly my-24 ml-40 font-thin bg-green-800 p-4 sm:hidden rounded-md">
      <p className="text-3xl w-2/3 text-gray-300 text-start">
        One doesn&#39; t become noble with any type of knowledge if he
        doesn&#39; t beautify his knowledge with good conduct.
      </p>
      <p className="text-1xl text-gray-100 text-start">
        Abdullah Ibn al-Mubarak &#40; rahimahullah &#41;
      </p>
      <p className="text-gray-100"> &#91;Adab Shar&#39; iyyah 4/208&#93;</p>
    </div>
  );
};

export default Quote;
