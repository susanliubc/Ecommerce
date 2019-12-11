import React from 'react';
import { connect } from 'react-redux';
import CartList from './CartList';
import CheckoutForm from './CheckoutForm';
import fetchApi from '../modules/fetch-api';

const submitOrder = (values, cart) => {
  const { email, name } = values.order;
  fetchApi(
    'post',
    'https://student-example-api.herokuapp.com/v1/products.json',
    {
      order: {
        name,
        email,
        order_item_attributes: cart.map(item => ({
          product_id: item.id,
          quantity: item.quantity
        }))
      }
    }
  ).then(json => {
    if (json.errors) {
      alert('something went wrong');
      return;
    }
    document.location.href = `/orders/${json.id}`;
  });
};
const CheckoutItem = ({ cart }) => {
  return (
    <div className='checkoutItem'>
      <div style={{ border: '1px solid black' }}>
        <CartList />
      </div>

      <CheckoutForm onSubmit={values => submitOrder(values, cart)} />
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart.cart
});

export default connect(mapStateToProps)(CheckoutItem);

//https://student-example-api.herokuapp.com/v1/products.json
