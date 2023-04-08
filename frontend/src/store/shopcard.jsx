import React, { useContext, useState } from "react";
import { FaServer, FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShopContext } from "../shop-context";

const Shopcard = (props) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const { card } = props;
  const [isHovering, setIsHovering] = useState(false);

  const handlemouseOver = () => {
    setIsHovering(true);
  };
  const handlemouseout = () => {
    setIsHovering(false);
  };

  const cartItemAmount = cartItems[card.id];

  return (
    <div
      className="bg-gray-400 rounded-md hover:shadow-lg relative "
      onMouseOver={handlemouseOver}
      onMouseOut={handlemouseout}
    >
      <Link className="flex flex-col  text-white ">
        <img alt="cardImg" src={card.image}></img>
        <div className="flex flex-col items-start pl-6 w-full">
          <p className="font-bold hover:text-yellow-400">{card.Quote}</p>
          <p className="text-xs underline">{card.Author}</p>
          <p className="font-bold mt-2">{card.Price}</p>
        </div>
      </Link>
      {isHovering && (
        <div className="w-44 h-16 rounded-lg bg-gray-200 absolute top-64 left-20 flex justify-evenly items-center text-2xl text-gray-500 animate-pulse ">
          <Link>
            <FaServer />
          </Link>
          <p>|</p>
          <button>
            <FaShoppingBasket
              className="hover:text-black"
              onClick={() => addToCart(card.id)}
            />
          </button>
          {cartItemAmount > 0 && (
            <div className="text-black absolute top-24 rounded-md w-24 h-8 flex justify-center items-center bg-yellow-300">
              <p className="text-sm text-gray-700">({cartItemAmount}) added</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Shopcard;
