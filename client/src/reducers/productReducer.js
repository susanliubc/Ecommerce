import {
  ADD_CART,
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
  let updatedCart;
  let updatedItemIndex;
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        addedProducts:
          state.addedProducts.length === 0 ||
          state.addedProduct.findIndex(
            product => product.id === action.payload.product.id
          ) === -1
            ? [...state.addedProducts, action.payload]
            : state.addedProducts.map(addedProduct =>
                addedProduct.product.id === action.payload.product.id
                  ? { ...addedProduct, quantity: (addedProduct.quantity += 1) }
                  : null
              ),
        totalPrice:
          Math.round((state.totalPrice += action.payload.product.price) * 100) /
          100
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
      // updatedCart = [...state.addedProducts];
      // updatedItemIndex = updatedCart.findIndex(
      //   product => product.id === action.payload.product.id
      // );

      // const updatedItem = { ...updatedCart[updatedItemIndex] };
      // updatedItem.quantity = action.payload.quantity;
      // updatedCart[updatedItemIndex] = updatedItem;
      // console.log('payload', action.payload);
      // console.log('updatedCart', updatedCart);
      return {
        ...state,
        addedProducts: state.addedProducts.map(addedProduct =>
          addedProduct.product.id === action.payload.product.id
            ? { ...addedProduct, quantity: action.payload.quantity }
            : addedProduct
        ),
        totalPrice: state.totalPrice
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
