import { CART_ACTION_TYPES } from './actionTypes';

export const cartReducer = (state = [], action) => {
  console.log(action);
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      // eslint-disable-next-line no-case-declarations
      const newProduct = {
        ...payload,
        quantity: 1,
      };
      return [...state, newProduct];
    case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
      return state.filter((item) => item.id !== payload);
    case CART_ACTION_TYPES.INCREASE_QUANTITY:
      return state.map((item) => {
        if (item.id === payload.id && item.quantity < payload.MAX_ITEMS) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    case CART_ACTION_TYPES.DECREASE_QUANTITY:
      return state.map((item) => {
        if (item.id === payload.id && item.quantity > payload.MIN_ITEMS) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

    case CART_ACTION_TYPES.CLEAR_CART:
      console.log('entrando');
      return [];
  }
};
