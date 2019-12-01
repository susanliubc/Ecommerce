import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addProduct,
  deleteProduct,
  updateQuantity
} from '../../actions/productAction';

class Home extends Component {
  render() {
    const handleClick = id => {
      this.props.addProduct(id);
    };
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
              <button onClick={handleClick}>Add To Cart</button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className='page-container'>
        <h1 className='center'>Fruit Grocery</h1>
        <div className='productlist'>{productList}</div>
      </div>
    );
  }
}

Home.propTypes = {
  products: PropTypes.array.isRequired,
  addProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: state.product.products
});

export default connect(mapStateToProps, {
  addProduct,
  deleteProduct,
  updateQuantity
})(Home);
