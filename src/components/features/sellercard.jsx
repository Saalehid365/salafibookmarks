import React from "react";

const Sellercard = (props) => {
  const { price, author } = props;

  return (
    <div>
      <div class="flex flex-col justify-center items-center max-w-sm mx-auto my-8 border rounded-md">
        <div class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center bg-bookmark1"></div>
        <div class="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
          <div class="py-2 text-center font-bold uppercase tracking-wide text-gray-600">
            {author}
          </div>
          <div class="flex items-center justify-between py-2 px-3 bg-gray-400">
            <h1 class="text-gray-800 font-bold ">{price}</h1>
            <button class=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellercard;
