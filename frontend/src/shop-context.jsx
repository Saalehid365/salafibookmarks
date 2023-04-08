import React, { createContext, useState } from "react";
import { bookmarks } from "./bookmarks";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < bookmarks.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartAmount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotal = () => {
    let totalCost = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = bookmarks.find((product) => product.id === Number(item));
        totalCost += cartItems[item] * itemInfo.Price;
      }
    }

    return totalCost;
  };

  const totalAmount = getTotal();
  const completeAmount = Number(totalAmount.toFixed(2));

  const contextValue = {
    cartItems,
    removeFromCart,
    addToCart,
    updateCartAmount,
    getTotal,
    completeAmount,
  };
  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
