import { useReducer } from 'react';
import { CartContext } from './CartContext';
import { CART_ACTION_TYPES } from './actionTypes';
import { cartReducer } from './cartReducer';

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const MAX_ITEMS = 9;
  const MIN_ITEMS = 1;

  const addItemtoCart = (item) => {
    dispatch({ type: CART_ACTION_TYPES.ADD_ITEM_TO_CART, payload: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART, payload: id });
  };
  const decreaseQuantity = (id) => {
    dispatch({
      type: CART_ACTION_TYPES.DECREASE_QUANTITY,
      payload: { id, MIN_ITEMS },
    });
  };
  const increaseQuantity = (id) => {
    dispatch({
      type: CART_ACTION_TYPES.INCREASE_QUANTITY,
      payload: { id, MAX_ITEMS },
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemtoCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
};
