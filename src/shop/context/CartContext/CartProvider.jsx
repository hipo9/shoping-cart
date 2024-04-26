import { useReducer } from 'react';
import { CartContext } from './CartContext';
import { CART_ACTION_TYPES } from './actionTypes';
import { cartReducer } from './cartReducer';

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItemtoCart = (item) => {
    dispatch({ type: CART_ACTION_TYPES.ADD_ITEM_TO_CART, payload: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART, payload: id });
  };

  return (
    <CartContext.Provider value={{ cart, addItemtoCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
