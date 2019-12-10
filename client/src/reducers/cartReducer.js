import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/type';

const initState = {
  cart: [],
  totalPrice: 0
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cart: addToCart(state.cart, action.payload),
        totalPrice: (state.totalPrice += action.payload.price)
      };
    case REMOVE_FROM_CART:
      return {
        cart: state.cart.filter(item => item.id !== action.payload.id),
        totalPrice: updateTotalPrice(
          state.cart,
          state.totalPrice,
          action.payload
        )
      };
    default:
      return state;
  }
};

const cartWithoutItem = (cart, item) => cart.filter(i => i.id !== item.id);
const itemInCart = (cart, item) => cart.filter(i => i.id === item.id)[0];
const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item);
  console.log('cartWithoutItem', cartWithoutItem(cart, item));
  console.log('cartItem', cartItem);
  return cartItem === undefined
    ? [...cartWithoutItem(cart, item), item]
    : [
        ...cartWithoutItem(cart, item),
        { ...cartItem, quantity: cartItem.quantity + 1 }
      ];
};
//const removeFromCart = (cart, item) => {
// return item.quantity === 1 ? [...cartWithoutItem(cart, item)] : [...cartWithoutItem(cart, item), {...item, quantity: item.quantity - 1}];
const updateTotalPrice = (cart, totalPrice, item) => {
  const cartItem = itemInCart(cart, item);
  return cartItem === undefined
    ? totalPrice
    : totalPrice - cartItem.quantity * cartItem.price;
};
