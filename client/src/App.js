import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
// import Login from './components/pages/Login';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            {/* <Route exact path='/login' component={Login} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
