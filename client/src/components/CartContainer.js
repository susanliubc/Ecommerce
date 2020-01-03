import React from 'react';
import CartList from './CartList';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CartContainer = ({ isAuthenticated }) => {
  let history = useHistory();
  const handleClick = () => {
    console.log('here');
    return isAuthenticated
      ? history.push('/dashboard')
      : history.push('/login');
  };
  return (
    <div className='cart-container'>
      <CartList />
      <button className='btn btn-large checkoutBtn' onClick={handleClick}>
        Checkout
      </button>
    </div>
  );
};

CartContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(CartContainer);
