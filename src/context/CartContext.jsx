import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState(["a"]);

  const state = {
    products,
  };
  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { useCartContext, CartContextProvider };
