import {
  LOAD_CART,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_QUANTITY,
  UPDATE_CART
} from '../actions/type';


const initState = {
  products: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case LOAD_CART:
      return {
        ...state,
        products: action.payload
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          product => product.id !== action.payload
        )
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        productToChange: action.payload
      };
    default:
      return state;
  }
};
