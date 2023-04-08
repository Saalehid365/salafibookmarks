import React, { useContext } from "react";
import { ShopContext } from "../shop-context";

const Cartitem = (props) => {
  const { id, Quote, Color, image, Author, Price } = props.data;
  const { addToCart, cartItems, removeFromCart, updateCartAmount } =
    useContext(ShopContext);

  const subtotal = Price * cartItems[id];

  const completeSubtotal = subtotal.toFixed(2);

  return (
    <tr className="border h-8 ">
      <td className="flex items-center pl-2 w-full">
        <button
          className=" border rounded-full h-8 w-8"
          onClick={() => removeFromCart(props.id)}
        >
          x
        </button>
        <img alt="image" src={image} className="h-28 w-28 pl-4"></img>
        <p>{Quote}</p>
      </td>
      <td className="">
        <p>{Price}</p>
      </td>
      <td className=" flex justify-center">
        <button
          className="bg-gray-300 mr-2 w-6 rounded-md text-xs"
          onClick={() => removeFromCart(id)}
        >
          -
        </button>
        <input
          className="w-12 border rounded-md mr-2 pl-2"
          value={cartItems[id]}
          onChange={(e) => updateCartAmount(Number(e.target.value), id)}
        ></input>
        <button
          className="bg-gray-300 mr-2 w-6 rounded-md text-xs"
          onClick={() => addToCart(id)}
        >
          +
        </button>
      </td>
      <td className="">
        <p>{completeSubtotal}</p>
      </td>
    </tr>
  );
};

export default Cartitem;
