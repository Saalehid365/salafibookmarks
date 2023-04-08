import React, { useContext } from "react";
import { bookmarks } from "../bookmarks";
import { ShopContext } from "../shop-context";
import Cartitem from "./cartitem";

const Carttable = (props) => {
  const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <table className="w-4/5 mt-12">
      <tr className="border h-12 bg-gray-50 ">
        <th className="w-2/3 text-start pl-8">Product</th>
        <th className="border-x-2">price</th>
        <th className="border-x-2">quantity</th>
        <th className="border-x-2">subtotal</th>
      </tr>

      {bookmarks.map((product) => {
        if (cartItems[product.id] !== 0) {
          return <Cartitem data={product} />;
        }
      })}
    </table>
  );
};

export default Carttable;
