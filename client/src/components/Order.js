import React from 'react';
import OrderItem from './OrderItem.js';

const Order = props => {
  return (
    <div>
      <h2>My Order</h2>
      <OrderItem id={props.match.params.id} />
    </div>
  );
};

export default Order;
