import React from "react";
import stock from "../assets/6920933.jpg";

const Feature1 = () => {
  return (
    <div className="flex h-96 justify-evenly items-center bg-feature1 bg-cover bg-bottom bg-no-repeat">
      <div className="w-2/3 flex flex-col items-center justify-between h-2/3 ">
        <p className="text-orange-600 text-2xl font-bold">Wholesale Offers</p>
        <p className="text-3xl text-white font-bold ">
          30% Discount on 100+ Bookmarks
        </p>
        <p className="text-white w-2/3 justify-center flex items-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis numquam
          soluta maxime tenetur vero earum quisquam, reiciendis dolores ipsa
          quae mollitia, inventore quis, explicabo quos.
        </p>
        <button className=" rounded-md w-32 h-10 bg-black text-white bor">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Feature1;
