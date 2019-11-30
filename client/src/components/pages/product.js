import React from 'react';
import PropTypes from 'prop-types';
import {
  addProduct,
  deleteProduct,
  updateQuantity
} from '../../actions/productAction';
import { connect } from 'react-redux';

const Product = ({
  product: { name, image, description, price },
  addProduct,
  deleteProduct,
  updateQuantity
}) => {
  return (
    <div className='product'>
      <h3>{name}</h3>
      <img
        src={`/products/${image}`}
        alt='image loading'
        height={100}
        title={name}
      />
      <div>{description}</div>
      <div>${price}</div>
      <div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired
};

export default connect(null, { addProduct, deleteProduct, updateQuantity })(
  Product
);
