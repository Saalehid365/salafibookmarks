import React, { createContext, useState } from "react";
import { getProductData } from "./bookmarks";

export const ShopContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [filter, setFilter] = useState("");
  const [toggleHam, setToggleHam] = useState(false);

  function getProductQuantity(id) {
    const quantity = cartItems.find((product) => product.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      // not in cart
      setCartItems([
        ...cartItems,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      // in cart
      // [ { id: 1, quantity: 3 } ]
      setCartItems(
        cartItems.map((product) =>
          product.id === id
            ? {
                ...product,
                quantity: product.quantity + 1,
              }
            : product
        )
      );
    }
  }
  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartItems(
        cartItems.map((product) =>
          product.id === id
            ? {
                ...product,
                quantity: product.quantity - 1,
              }
            : product
        )
      );
    }
  }
  function deleteFromCart(id) {
    setCartItems((cartItems) =>
      cartItems.filter((currentItems) => {
        return currentItems.id !== id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartItems.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      totalCost += productData.Price * cartItem.quantity;
      return totalCost;
    });
  }
  const toggleModal1 = () => {
    setToggleHam(!toggleHam);
  };

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const contextValue = {
    items: cartItems,
    addOneToCart,
    deleteFromCart,
    getTotalCost,
    removeOneFromCart,
    getProductQuantity,
    filter,
    setFilter,
    setToggleHam,
    toggleHam,
    toggleModal1,
    setToggle,
    toggle,
    handleToggle,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
