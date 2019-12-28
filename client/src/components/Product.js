import React from 'react';
import { connect } from 'react-redux';
import { addToCarts } from '../actions/cartAction';

const Product = ({
  product: { id, name, img, description, price },
  cart,
  addToCarts
}) => {
  return (
    <div className='product'>
      <img src={`/photos/${img}.jpg`} alt='loading product'></img>
      <h3>{name}</h3>
      <p className='product-description'>
        <small>{description}</small>
      </p>
      <p>
        <b>Price: ${price}</b>
      </p>
      <button
        className='addBtn'
        onClick={() =>
          addToCarts({ id, name, img, description, price, quantity: 1 })
        }
      >
        Add To Cart
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart.cart
});

export default connect(mapStateToProps, { addToCarts })(Product);
