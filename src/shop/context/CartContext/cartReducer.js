import { CART_ACTION_TYPES } from './actionTypes';

export const cartReducer = (state, action) => {
  console.log(state);
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      let items = state || [];
      return [...items, { ...payload, quantity: 1 }];
      
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
    default:
      return state;
  }
};
