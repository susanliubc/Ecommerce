import React from 'react';
import { connect } from 'react-redux';
import { addToCarts } from '../actions/cartAction';

const Product = ({
  product: { id, name, description, img, price },
  cart,
  addToCarts
}) => {
  return (
    <div className='product'>
      <h3>{name}</h3>
      <h4>{description}</h4>
      <img src={img} alt='loading product'></img>
      <p>
        <b>Price: ${price}</b>
      </p>
      <button
        className='addBtn'
        onClick={() =>
          addToCarts({ id, name, description, img, price, quantity: 1 })
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
