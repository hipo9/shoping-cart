import { createContext, useContext } from 'react';

export const CartContext = createContext({});

export const useCartContext = () => {
  const context = useContext(CartContext);
  return context;
};
