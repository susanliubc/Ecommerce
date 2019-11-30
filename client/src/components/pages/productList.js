import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../layout/header';
import Product from './product';
import Spinner from '../layout/Spinner';
import {
  addProduct,
  deleteProduct,
  updateQuantity
} from '../../actions/productAction';

const ProductList = ({
  products,
  loading,
  addProduct,
  deleteProduct,
  updateQuantity
}) => {
  console.log(products);
  return (
    <Fragment>
      {loading && <Spinner />}
      <Header />
      <div className='productlist'>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Fragment>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  addProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cart: state.products
});

export default connect(mapStateToProps, {
  addProduct,
  deleteProduct,
  updateQuantity
})(ProductList);
