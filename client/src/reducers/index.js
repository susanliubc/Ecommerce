import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productReducer from './productReducer';
import authReducer from './authReducer';

export default combineReducers({
  cart: cartReducer,
  products: productReducer,
  auth: authReducer
});
