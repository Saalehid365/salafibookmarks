import React, { useContext } from "react";
import { ShopContext } from "../shop-context";

const Topsellercard = (props) => {
  const product = props.product;
  const cart = useContext(ShopContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <div>
      <div class="w-80 bg-white shadow rounded hover:scale-105 hover:transform sm:w-72 sm:h-42 sm:hover:transform-none sm:hover:scale-0">
        <div class="h-full w-full bg-gray-100 flex flex-col justify-between p-2 bg-cover bg-center">
          <img src={product.image} alt="productImg" className="h-60 "></img>
          <div>
            <span class="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
              available
            </span>
          </div>
        </div>
        <div class="p-4 flex flex-col items-center">
          <p class="text-gray-400 font-light text-xs text-center">
            {product.Author}
          </p>
          <h1 class="text-gray-800 w-full text-center mt-1 text-ellipsis whitespace-nowrap overflow-hidden font-bold">
            {product.Quote}
          </h1>
          <p class="text-center text-gray-800 mt-1">£{product.Price}</p>
          <div class="inline-flex items-center mt-2">
            <button
              class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200 "
              onClick={() => cart.removeOneFromCart(product.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 12H4"
                />
              </svg>
            </button>
            <div class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
              {productQuantity}
            </div>
            <button
              class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
              onClick={() => cart.addOneToCart(product.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
          <button
            class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center sm:w-32 sm:h-10 sm:text-xs"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add to cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topsellercard;
