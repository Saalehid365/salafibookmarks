import React, { useContext } from "react";
import { ShopContext } from "../shop-context";
import Cartitem from "./cartitem";

const Carttable = (props) => {
  const cart = useContext(ShopContext);

  return (
    <table className="h-16 w-2/4 mt-12 mb-12">
      <tr className="border h-8 bg-gray-50 text-gray-500  sm:hidden">
        <th className="text-start pl-2 ">Product</th>
        <th className="border-x-2 w-24">price</th>
        <th className="border-x-2 w-24">quantity</th>
        <th className="border-x-2 w-32">subtotal</th>
      </tr>

      {cart.items.map((currentProduct, idx) => (
        <Cartitem
          key={idx}
          id={currentProduct.id}
          quantity={currentProduct.quantity}
          currentProduct={currentProduct}
        ></Cartitem>
      ))}
    </table>
  );
};

export default Carttable;
