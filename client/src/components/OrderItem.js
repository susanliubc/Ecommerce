import React, { useState, useEffect } from 'react';
import fetchApi from '../modules/fetch-api';

const OrderItem = () => {
  const [order, setOrder] = useState(null);
  useEffect(() => {
    fetchApi(
      'get',
      `https://student-example-api.herokuapp.com/v1/orders/${this.props.id}`
    ).then(json => setOrder(json));
  });
  const renderOrder = () => {
    const { name, email, order_items } = order;
    return (
      <div>
        <h3>Order Info</h3>
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <h4>Items</h4>
        <ul>
          {order_items &&
            order_items.map(item => {
              const {
                product,
                quantity,
                product: { name, image, price }
              } = item;
              return (
                <li>
                  <img src={image} width={32} />
                  {name}({quantity} @ ${price} = $
                  {parseFloat(quantity) * parseFloat(price)})
                </li>
              );
            })}
        </ul>
      </div>
    );
  };
  return <div>{order ? renderOrder() : 'Loading...'}</div>;
};

export default OrderItem;
