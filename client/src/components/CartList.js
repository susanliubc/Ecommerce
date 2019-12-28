import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import {
  removeFromCarts,
  addToCarts,
  dropFromCarts
} from '../actions/cartAction';

const CartList = ({
  cart,
  totalPrice,
  isAuthenticated,
  removeFromCarts,
  addToCarts,
  dropFromCarts
}) => {
  let history = useHistory();
  const handleClick = () => {
    console.log('here');
    return isAuthenticated
      ? history.push('/dashboard')
      : history.push('/login');
  };

  console.log('isAuthenticated', isAuthenticated);
  return (
    <Fragment>
      <div className='cart'>
        <h3>Cart</h3>
        <div className='cartList'>
          <ol className='cartListItem'>
            {cart.length > 0
              ? cart.map(cartItem => (
                  <CartItem
                    key={cartItem.id}
                    cartItem={cartItem}
                    removeFromCart={removeFromCarts}
                    addToCart={addToCarts}
                    dropFromCart={dropFromCarts}
                  />
                ))
              : null}
          </ol>
          <div className='totalPrice'>
            <p>
              <b>price: $ {totalPrice.toFixed(2)}</b>
            </p>
            <p>
              <b>GST 5%: $ {(totalPrice * 0.05).toFixed(2)}</b>
            </p>
            <p>
              <b>PST 7%: $ {(totalPrice * 0.07).toFixed(2)}</b>
            </p>
            <p>
              <b>Total price: $ {(totalPrice * 1.12).toFixed(2)}</b>
            </p>
          </div>
          <button className='btn btn-large checkoutBtn' onClick={handleClick}>
            Checkout
          </button>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  cart: state.cart.cart,
  totalPrice: state.cart.totalPrice,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  removeFromCarts,
  addToCarts,
  dropFromCarts
})(CartList);
