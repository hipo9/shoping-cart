import { useEffect, useMemo, useReducer, useState } from 'react';
import { cartReducer } from '../context/CartContext/cartReducer';
import { CART_ACTION_TYPES } from '../context/CartContext/actionTypes';
import {
  getLocalStorage,
  saveLocalStorage,
} from '../../utilities/localStorage';

const init = () => {
  return getLocalStorage('cart');
};

export const useCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, [], init);

  const calcTotal = () => {
    if (!cart) return 0;

    let res = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    return res;
  };

  const total = useMemo(() => calcTotal(), [cart]);

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

  useEffect(() => {
    saveLocalStorage(cart, 'cart');
  }, [cart]);
  console.log(total);
  return {
    cart,
    addItemtoCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    total,
  };
};
