import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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
  removeFromCarts,
  addToCarts,
  dropFromCarts
}) => {
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
        </div>
      </div>
    </Fragment>
  );
};

CartList.propTypes = {
  cart: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  removeFromCarts: PropTypes.func.isRequired,
  addToCarts: PropTypes.func.isRequired,
  dropFromCarts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart.cart,
  totalPrice: state.cart.totalPrice
});

export default connect(mapStateToProps, {
  removeFromCarts,
  addToCarts,
  dropFromCarts
})(CartList);
