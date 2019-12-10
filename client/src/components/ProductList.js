import React, { Fragment } from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <Fragment>
      <div className='productList'>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Fragment>
  );
};

export default ProductList;
