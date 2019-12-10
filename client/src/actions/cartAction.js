import { ADD_TO_CART, REMOVE_FROM_CART } from './type';

export const addToCarts = product => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCarts = product => ({
  type: REMOVE_FROM_CART,
  payload: product
});
