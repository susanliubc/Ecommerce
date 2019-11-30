import React, { Fragment } from 'react';
import './App.css';
import Home from './components/pages/Home';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <h1>Shopping Cart</h1>
      <Home />
    </Fragment>
  </Provider>
);

export default App;
