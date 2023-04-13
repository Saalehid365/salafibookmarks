import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../shop-context";

const Shopcard = (props) => {
  const product = props.product;
  const cart = useContext(ShopContext);
  const productQuantity = cart.getProductQuantity(product.id);

  const [isHovering, setIsHovering] = useState(false);

  const handlemouseOver = () => {
    setIsHovering(true);
  };
  const handlemouseout = () => {
    setIsHovering(false);
  };
  console.log(cart.items);
  return (
    <div
      className="bg-gray-200 rounded-md hover:shadow-lg relative  "
      onMouseOver={handlemouseOver}
      onMouseOut={handlemouseout}
    >
      <div className="flex flex-col ">
        <img alt="cardImg" className="w-full h-66" src={product.image}></img>
        <div className="flex flex-col items-start pt-2 px-6 w-full text-start">
          <p className=" max-w-24 font-semibold">{product.Quote}</p>
          <div className="flex items-center justify-between w-full">
            <p className="text-xs text-start ">{product.Author}</p>

            <p className="font-semibold">£{product.Price}</p>
          </div>
        </div>
        {productQuantity > 0 ? (
          <div className="flex justify-evenly pt-4 ">
            <h3 className="font-bold">In Cart: {productQuantity}</h3>
            <div>
              <div className="w-32 flex justify-evenly">
                <button
                  className="h-8 w-8 bg-blue-600 rounded-sm text-white hover:bg-blue-400"
                  onClick={() => cart.removeOneFromCart(product.id)}
                >
                  -
                </button>
                <button
                  className="h-8 w-8 bg-blue-600 rounded-sm text-white hover:bg-blue-400"
                  onClick={() => cart.addOneToCart(product.id)}
                >
                  +
                </button>
              </div>
              <div className="py-4">
                <button
                  className="bg-red-500 w-32 rounded-md text-sm h-10 text-white hove:bg-red-300"
                  onClick={() => cart.deleteFromCart(product.id)}
                >
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="">
            <button
              className="h-8 w-28 rounded-lg bg-blue-500 mt-6 mb-2 text-white text-xs font-bold"
              onClick={() => cart.addOneToCart(product.id)}
            >
              add to cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shopcard;
