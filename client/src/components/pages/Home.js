import React, { useEffect } from 'react';
import ProductList from '../ProductList';
import products from '../../data';
import Header from '../layouts/Header';
import CartContainer from '../CartContainer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser } from '../../actions/authAction';

const Home = ({ token, loadUser }) => {
  useEffect(() => {
    if (token) {
      loadUser();
    }
  }, [isAuthenticated, token]);
  return (
    <div className='home'>
      <Header />
      <CartContainer />
      <ProductList products={products} />
    </div>
  );
};

Home.propTypes = {
  loadUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(mapStateToProps, { loadUser })(Home);
