import React, { Fragment } from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { removeFromCarts } from '../actions/cartAction';

const CartList = ({ cart, totalPrice, removeFromCarts }) => {
  return (
    <Fragment>
      <div className='cart'>
        <h3>Cart</h3>
        <div className='cartList'>
          <ul className='cartListItem'>
            {cart.length > 0
              ? cart.map(cartItem => (
                  <CartItem
                    key={cartItem.id}
                    cartItem={cartItem}
                    removeFromCart={removeFromCarts}
                  />
                ))
              : null}
          </ul>
          <div className='totalPrice'>
            <b>Total price: $ {totalPrice}</b>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  cart: state.cart.cart,
  totalPrice: state.cart.totalPrice
});

export default connect(mapStateToProps, { removeFromCarts })(CartList);
