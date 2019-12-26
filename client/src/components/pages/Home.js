import React from 'react';
import ProductList from '../ProductList';
import products from '../../data';
import CartList from '../CartList';
import Header from '../layouts/Header';

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <CartList />
      <ProductList products={products} />
    </div>
  );
};

export default Home;
