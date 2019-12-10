import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import products from './data';
import { Provider } from 'react-redux';
import store from './store';
import CartList from './components/CartList';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <h3>Product List</h3>
        <CartList />
        <ProductList products={products} />
      </div>
    </Provider>
  );
};

export default App;
