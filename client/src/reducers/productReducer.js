import {
  LOAD_CART,
  ADD_PRODUCT,
  SUBTRACT_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_QUANTITY,
  CLEAR_CART
} from '../actions/type';

const initState = {
  products: [
    {
      id: 1,
      name: 'Banana',
      description: 'Organic Banana Thailand Produced',
      image: 'banana.jpg',
      price: 0.6
    },
    {
      id: 2,
      name: 'Gala Apple',
      description: 'Gala Apple BC Produced',
      image: 'galaapple.jpg',
      price: 1.2
    },
    {
      id: 3,
      name: 'Naval Orange',
      description: 'Naval Orange California Produced',
      image: 'navalorange.jpg',
      price: 0.99
    },
    {
      id: 4,
      name: 'Red Delicious Apple',
      description: 'Red Delicious Apple BC Produced',
      image: 'reddeliciousapple.jpg',
      price: 0.8
    },
    {
      id: 5,
      name: 'Water Melon',
      description: 'Water Melon Mexico Produced',
      image: 'watermelon.jpg',
      price: 5.3
    },
    {
      id: 6,
      name: 'Coconut',
      description: 'Coconut Thailand Produced',
      image: 'Coconut.jpg',
      price: 2.4
    }
  ],
  addedProducts: [],
  totalPrice: 0
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
        addedProducts: [...state.addedProducts, action.payload],
        totalPrice:
          Math.round((state.totalPrice += action.payload.product.price) * 100) /
          100
      };
    case SUBTRACT_PRODUCT:
      return {
        ...state,
        addedProducts: state.addedProducts.filter(
          addedProduct => addedProduct.id !== action.payload.id
        ),
        totalPrice: Math.round((state.totalPrice -= action.payload.price))
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        addedProducts: state.addedProducts.filter(
          addedProduct => addedProduct.product.id !== action.payload.product.id
        ),
        totalPrice:
          Math.round(
            (state.totalPrice -=
              action.payload.product.price * action.payload.quantity) * 100
          ) / 100
      };
    case UPDATE_QUANTITY:
      let item = state.addedProducts.find(
        item => item.id === action.payload.id
      );
      let newCart = state.addedProducts.filter(
        item => item.id === action.payload.id
      );
      item.quantity = action.payload.quantity;
      newCart.push(item);
      return {
        ...state,
        addedProducts: state.addedProducts,
        totalPrice: (state.totalPrice -=
          action.payload.price * action.payload.quantity)
      };
    case CLEAR_CART:
      return {
        ...state,
        addedProduct: [],
        totalPrice: 0
      };
    default:
      return state;
  }
};
