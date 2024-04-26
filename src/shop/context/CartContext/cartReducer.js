import { CART_ACTION_TYPES } from './actionTypes';

export const cartReducer = (state = [], action) => {
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
    default:
      break;
  }
};
