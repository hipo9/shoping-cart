import { CART_ACTION_TYPES } from './actionTypes';

export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      return [...state, payload];
    default:
      break;
  }
};
