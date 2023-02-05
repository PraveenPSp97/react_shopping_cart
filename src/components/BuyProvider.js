import React, { Children, createContext, useContext, useState } from "react";
import { json } from "react-router";

const BuyProviders = createContext();

export const BuyProvider = ({ children }) => {
  const [products, setproduct] = useState([]);

  const [cartItems, setcartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [cartCount, setcartCount] = useState(cartItems.length || 0);
  const [allProducts, setallProducts] = useState([]);
  console.log("cartItems", cartItems);

  const handleDeleteCart = (id) => {
    const newCart = cartItems.filter((item) => item.id != id);
    setcartItems(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
    setcartCount((cartCount) => newCart.length);
  };
  const handleAddToCart = (newCart) => {
    console.log("inside cart", newCart);
    const isNewCart = cartItems.find((cart) => cart.id == newCart.id);

    if (!isNewCart) {
      const newItems = [...cartItems, newCart];
      setcartItems(newItems);

      localStorage.setItem("cartItems", JSON.stringify(newItems));
      setcartCount((cart) => cart + 1);
    }
  };
  return (
    <BuyProviders.Provider
      value={{
        cartCount: cartCount,
        setcartCount,
        cartItems,
        setcartItems,
        handleAddToCart,
        handleDeleteCart,
        products,
        setproduct,
        setallProducts,
        allProducts,
      }}
    >
      {children}
    </BuyProviders.Provider>
  );
};

export const useProvider = () => {
  return useContext(BuyProviders);
};
