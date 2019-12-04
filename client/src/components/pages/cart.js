import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  removeProduct,
  clearCart,
  updateQuantity
} from '../../actions/productAction';

class Cart extends Component {
  state = {
    quantity: this.props.addedProducts.quantity,
    btnVisible: false
  };
  handleChange = e => {
    if (e.target.value <= 1) {
      alert('Quantity must be greater than 1');
    } else {
      this.setState({ [e.target.name]: e.target.value, btnVisible: true });
    }
  };
  handleSubmit = (item, quantity) => {
    // e.preventDefault();
    console.log('Update');
    this.props.updateQuantity(item, quantity);
    console.log('After Update');
    this.setState({ btnVisible: false, quantity: 0 });
  };
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
    console.log('Cart-addedProducts', this.props.addedProducts);
    const addedProducts = this.props.addedProducts.length ? (
      this.props.addedProducts.map(addedProduct => {
        return (
          <li className='collection-item avatar' key={addedProduct.product.id}>
            <img
              src={`/products/${addedProduct.product.image}`}
              alt='Cart image loading'
            />
            <span>{addedProduct.product.name}</span>
            <p>{addedProduct.product.desc}</p>
            <p>
              <b>Price: ${addedProduct.product.price}</b>
            </p>
            <p>
              <b>Quantity: {addedProduct.quantity}</b>
            </p>
            <form
              onSubmit={() =>
                this.handleSubmit(addedProduct, this.state.quantity)
              }
            >
              <div className='inputfield'>
                <input
                  type='text'
                  id='quantity'
                  name='quantity'
                  onChange={this.handleChange}
                  value={this.state.quantity}
                />
                <label htmlFor='quantity'>Change Quantity</label>
              </div>
              {this.state.btnVisible ? (
                <div className='changeBtn'>
                  <button type='submit' className='btn btn-info'>
                    Update Quantity
                  </button>
                </div>
              ) : null}
            </form>
            <button
              className='btn red removeBtn'
              onClick={() => this.removeProduct(addedProduct)}
            >
              Remove Product
            </button>
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
  updateQuantity: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  addedProducts: state.product.addedProducts,
  totalPrice: state.product.totalPrice
});

export default connect(mapStateToProps, {
  updateQuantity,
  removeProduct,
  clearCart
})(Cart);
