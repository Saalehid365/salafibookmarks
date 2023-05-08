import React, { useContext } from "react";
import { ShopContext } from "../shop-context";
import { getProductData } from "../bookmarks";
import { FaAngleDown, FaAngleUp, FaTimes } from "react-icons/fa";

const Cartitem = (props) => {
  const cart = useContext(ShopContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);
  // const productQuantity = cart.getProductQuantity(product.id);
  const total = quantity * productData.Price.toFixed(2);

  return (
    <tr className="border h-32 sm:border-0 sm:flex sm:items-center sm:h-16">
      <td className="w-96 flex justify-evenly items-center pl-2 sm:w-72 sm:justify-evenly h-full">
        <FaTimes
          className=" text-heavyMetal h-4 w-4 sm:border-0 text-3xl hover:cursor-pointer "
          onClick={() => cart.deleteFromCart(props.id)}
        />
        <div className="flex items-center w-3/4  ">
          <img
            alt="button"
            src={productData.image}
            className="h-20 w-20 sm:pl-0 sm:h-16 sm:w-16 sm:pr-2 mr-2"
          ></img>
          <div className="w-full sm:flex sm:flex-col sm:items-start">
            <p className=" sm:w-40 sm:text-ellipsis whitespace-nowrap overflow-hidden text-sm">
              {productData.Quote}
            </p>
            <p className=" hidden sm:inline">£{productData.Price} each</p>
          </div>
        </div>
      </td>
      <td className="text-gray-500 h-12 sm:hidden">
        <p>£{productData.Price}</p>
      </td>
      <td className="w-28 flex justify-evenly ">
        <h3 className="text-gray-500"> {quantity}</h3>
        <div className="flex flex-col ">
          <button
            className="bg-gray-300 mr-2 w-6 flex justify-center text-xs text-gray-500 hover:bg-gray-500 hover:text-gray-800"
            onClick={() => cart.addOneToCart(productData.id)}
          >
            <FaAngleUp />
          </button>
          <button
            className="bg-gray-300 mr-2 w-6  flex justify-center text-xs text-gray-500 hover:bg-gray-500 hover:text-gray-800"
            onClick={() => cart.removeOneFromCart(productData.id)}
          >
            <FaAngleDown />
          </button>
        </div>
      </td>
      <td className="text-blue-500 0 w-20 sm:hidde">
        <p>£{total}</p>
      </td>
    </tr>
  );
};

export default Cartitem;
