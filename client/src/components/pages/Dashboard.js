import React from 'react';
import PropTypes from 'prop-types';
import CartList from '../CartList';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

const Dashboard = ({ user, cart }) => {
  const { totalPrice } = cart;
  const priceForStripe = totalPrice * 100;
  const publishbleKey = 'pk_test_QbFONL8IxOxYW4nc4v8kavZa00wER82XnV';

  const onToken = token => {
    console.log('token', token);
    alert('Payment successful!');
  };

  return (
    <div className='dashboard grid-2'>
      <div className='dashboard-container'>
        <h3>Hello {user.name}!</h3>
        <p className='lead'>
          You have ordered the following product in your cart
        </p>
        <StripeCheckout
          label='Pay Now'
          name='Food Online Delivery'
          description='food order app'
          image='https://svgshare.com/i/CUz.svg'
          amount={priceForStripe}
          panelLabel='Pay Now'
          currency='CAD'
          shippingAddress
          billingAddress
          token={onToken}
          stripeKey={publishbleKey}
        >
          <button className='btn proceedBtn'>Proceed</button>
        </StripeCheckout>
      </div>
      <CartList />
    </div>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
  cart: state.cart
});

export default connect(mapStateToProps)(Dashboard);
