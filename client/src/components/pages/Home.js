import React from 'react';
import data from '../../data/product.json';
import ProductList from './productList';

const Home = props => {
  return (
    <div className='page-container'>
      <h1>Fruit Grocery</h1>
      <ProductList products={data.products} />
    </div>
  );
};

export default Home;
