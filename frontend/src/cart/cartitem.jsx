import React, { useContext } from "react";
import { ShopContext } from "../shop-context";
import { getProductData } from "../bookmarks";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Cartitem = (props) => {
  const cart = useContext(ShopContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);
  // const productQuantity = cart.getProductQuantity(product.id);

  console.log(cart.items);

  return (
    <tr className="border h-8 ">
      <td className="flex items-center pl-2 ">
        <button
          className=" border rounded-full h-8 w-8"
          onClick={() => cart.deleteFromCart(props.id)}
        >
          x
        </button>
        <img
          alt="button"
          src={productData.image}
          className="h-28 w-28 pl-4"
        ></img>
        <p className="">{productData.Quote}</p>
      </td>
      <td className="h-12">
        <p>{productData.Price}</p>
      </td>
      <td className="w-28 flex justify-evenly">
        <h3> {quantity}</h3>
        <div className="flex flex-col">
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
      <td className="w-20">
        <p>£{(quantity * productData.Price).toFixed(2)}</p>
      </td>
    </tr>
  );
};

export default Cartitem;
