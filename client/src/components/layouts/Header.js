import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='landing'>
      <div className='light-overlay '>
        <div className='landing-inner'>
          <h2 className='large'>Food Online Delivery</h2>
          <p className='lead'>Get fresh oriental food any time</p>
          <br />
          <div className="buttons">
            <Link to='/register' className='btn btn-large btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-large btn-light'>
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
