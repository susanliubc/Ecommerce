import {
  LOAD_CART,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_QUANTITY,
  UPDATE_CART
} from './type';

export const loadCart = products => ({
  type: LOAD_CART,
  payload: products
});

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product
});

export const deleteProduct = id => ({
  type: DELETE_PRODUCT,
  payload: id
});

export const updateQuantity = id => ({
  type: UPDATE_QUANTITY,
  payload: id
});
