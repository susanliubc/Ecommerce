import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authAction';

const Navbar = ({ isAuthenticated, logout }) => {
  const authLinks = (
    <ul className='navbar-nav'>
      <li className='nav-item'>
        <Link to='/dashboard' className='nav-link'>
          Dashboard
        </Link>
      </li>
      <li className='nav-item'>
        <a href='#!' onClick={() => logout()} className='nav-link'>
          Log out
        </a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul className='navbar-nav'>
      <li className='nav-item'>
        <Link to='/login' className='nav-link'>
          Login
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/register' className='nav-link'>
          Sign Up
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className='navbar'>
      <h3 className='logo'>
        <a href='/'>Food Online Delivery</a>
      </h3>
      {isAuthenticated ? authLinks : guestLinks}
    </nav>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);
