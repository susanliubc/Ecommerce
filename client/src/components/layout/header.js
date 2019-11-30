import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ productLength }) => {
  return (
    <div className='header'>
      <small className='product-found'>
        <span>{productLength} Products found></span>
      </small>
    </div>
  );
};

Header.propTypes = {
  productLength: PropTypes.number.isRequired
};

export default Header;
