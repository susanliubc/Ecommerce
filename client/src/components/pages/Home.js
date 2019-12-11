import React from 'react';
import ProductList from '../ProductList';
import products from '../../data';
import CartList from '../CartList';
import { useHistory } from 'react-router-dom';

const Home = () => {
  let history = useHistory();
  const handleCheckout = () => {
    history.push('/checkout');
  };
  return (
    <div>
      <h3>Product List</h3>
      <CartList />
      <button onClick={handleCheckout} className='checkoutBtn'>
        Checkout
      </button>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
