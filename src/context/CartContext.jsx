import { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const products = new Array(20).fill(null).map(() => ({
    id: faker.string.uuid(),
    productName: faker.commerce.productName(),
    productDescription: faker.commerce.productDescription(),
    price: faker.commerce.price({ min: 100, max: 5000 }),
    image: faker.image.urlPicsumPhotos({ height: 300, width: 300 }),
    inStock: faker.helpers.arrayElement([0, 5, 14, 16, 23]),
    fastDelivery: faker.datatype.boolean(),
    new: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
  const state = {
    products,
  };
  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { useCartContext, CartContextProvider };
