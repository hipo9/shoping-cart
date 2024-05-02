import { useReducer } from 'react';
import { cartReducer } from '../context/CartContext/cartReducer';
import { CART_ACTION_TYPES } from '../context/CartContext/actionTypes';

export const useCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const MAX_ITEMS = 9;
  const MIN_ITEMS = 1;

  const addItemtoCart = (item) => {
    dispatch({ type: CART_ACTION_TYPES.ADD_ITEM_TO_CART, payload: item });
  };
  const removeFromCart = (id) => {
    dispatch({ type: CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART, payload: id });
  };
  const decreaseQuantity = (id, quantity) => {
    if (quantity === MIN_ITEMS) return;

    dispatch({
      type: CART_ACTION_TYPES.DECREASE_QUANTITY,
      payload: { id, MIN_ITEMS },
    });
  };
  const increaseQuantity = (id, quantity) => {
    if (quantity === MAX_ITEMS) return;
    dispatch({
      type: CART_ACTION_TYPES.INCREASE_QUANTITY,
      payload: { id, MAX_ITEMS },
    });
  };

  const clearCart = () => {
    dispatch({ type: CART_ACTION_TYPES.CLEAR_CART });
  };

  return {
    cart,
    addItemtoCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
  };
};
