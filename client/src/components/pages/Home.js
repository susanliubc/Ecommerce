import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addProduct,
  subtractProduct,
  removeProduct,
  updateQuantity,
  clearCart
} from '../../actions/productAction';
import Cart from './cart';

class Home extends Component {
  // console.log('products', products);
  handleClick = item => {
    this.props.addProduct(item);
  };
  render() {
    const productList = this.props.products.map(product => {
      return (
        <div className='card' key={product.id}>
          <div className='card-image'>
            <img src={`/products/${product.image}`} alt='loding-image' />
          </div>
          <div className='card-content'>
            <span className='card-title'>{product.name}</span>
            <p>{product.description}</p>
            <p>
              <b>${product.price}</b>
            </p>
            <div className='card-button'>
              <button onClick={() => this.handleClick(product)}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className='page-container row'>
        <div className='col s7 product-container'>
          <h1 className='center'>Fruit Grocery</h1>
          <div className='productlist'>{productList}</div>
        </div>
        <div className='col s5 cart'>
          <Cart />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  products: PropTypes.array.isRequired,
  addedProducts: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  addProduct: PropTypes.func.isRequired,
  subtractProduct: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: state.product.products,
  addedProducts: state.product.addedProducts,
  totalPrice: state.product.totalPrice
});

export default connect(mapStateToProps, {
  addProduct,
  subtractProduct,
  removeProduct,
  updateQuantity,
  clearCart
})(Home);
