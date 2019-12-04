import {
  ADD_CART,
  ADD_PRODUCT,
  SUBTRACT_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_QUANTITY,
  CLEAR_CART
} from './type';

export const addCart = product => ({
  type: ADD_CART,
  payload: { product, quantity: 1 }
});

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: { product, quantity: 1 }
});

export const subtractProduct = product => ({
  type: SUBTRACT_PRODUCT,
  payload: { product, quantity: 1 }
});

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  payload: product
});

export const updateQuantity = (product, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { product, quantity: quantity }
});

export const clearCart = () => ({
  type: CLEAR_CART
});
