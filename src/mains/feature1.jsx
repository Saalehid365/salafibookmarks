import React from "react";

const Feature1 = () => {
  return (
    <div className="flex justify-evenly items-center bg-feature1 bg-cover bg-center bg-no-repeat py-40">
      <div className="w-2/3 flex flex-col items-center justify-between h-2/3 ">
        <p className="text-red-600 text-2xl font-bold bg-black p-2 rounded-md my-4">
          Wholesale Offers
        </p>
        <p className="text-3xl text-black font-bold ">
          30% Discount on <span className="text-red-600 font-bold">100+</span>{" "}
          Bookmarks
        </p>
        <p className="text-black w-2/3 justify-center flex items-center my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis numquam
          soluta maxime tenetur vero earum quisquam, reiciendis dolores ipsa
          quae mollitia, inventaore quis, explicabo quos.
        </p>
        <button className=" rounded-md w-32 h-10 bg-black text-white bor">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Feature1;
