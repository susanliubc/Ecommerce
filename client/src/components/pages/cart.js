import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addProduct,
  subtractProduct,
  removeProduct,
  clearCart
} from '../../actions/productAction';

class Cart extends Component {
  addProduct = item => {
    this.props.addProduct(item);
  };
  subtractProduct = item => {
    this.props.subtractProduct(item);
  };
  removeProduct = item => {
    this.props.removeProduct(item);
  };
  clearCart = () => {
    this.props.clearCart();
  };
  render() {
    console.log('addedProducts', this.props.addedProducts);
    const addedProducts = this.props.addedProducts.length ? (
      this.props.addedProducts.map(addedProduct => {
        return (
          <li className='collection-item avatar' key={addedProduct.product.id}>
            {/* <div className='item-img'> */}
            <img
              src={`/products/${addedProduct.product.image}`}
              alt='Cart image loading'
            />
            {/* </div>
            <div className='item-desc'> */}
            <span>{addedProduct.product.name}</span>
            <p>{addedProduct.product.desc}</p>
            <p>
              <b>Price: ${addedProduct.product.price}</b>
            </p>
            <p>
              <b>Quantity: {addedProduct.quantity}</b>
            </p>
            <div className='add-remove'>
              <a href='#'>
                <i
                  className='material-icons'
                  onClick={() => addProduct(addedProduct)}
                >
                  add_circle_outline
                </i>
              </a>
              <a href='#'>
                <i
                  className='material-icons'
                  onClick={() => subtractProduct(addedProduct)}
                >
                  remove_circle_outline
                </i>
              </a>
            </div>
            <button
              className='btn red remove'
              onClick={() => this.removeProduct(addedProduct)}
            >
              Remove Product
            </button>
            {/* </div> */}
          </li>
        );
      })
    ) : (
      <p>
        <b>Nothing</b>
      </p>
    );
    return (
      <div className='cart'>
        <h3>You have ordered: </h3>
        <ul className='collection'>{addedProducts}</ul>
        <p>
          <b>Total Price: ${this.props.totalPrice}</b>
        </p>
      </div>
    );
  }
}

Cart.propTypes = {
  addedProducts: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  addProduct: PropTypes.func.isRequired,
  subtractProduct: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  addedProducts: state.product.addedProducts,
  totalPrice: state.product.totalPrice
});

export default connect(mapStateToProps, {
  addProduct,
  subtractProduct,
  removeProduct,
  clearCart
})(Cart);
