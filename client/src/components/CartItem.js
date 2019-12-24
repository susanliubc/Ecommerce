import React from 'react';

const CartItem = ({
  cart,
  cartItem: { id, name, description, price, quantity },
  removeFromCart
}) => {
  return (
    <li className='cartItem'>
      <img
        src={`/photos/${name.toLowerCase()}.jpg`}
        alt='loading cartItem'
        className='cartImg'
      ></img>
      <span className='name'>{name}</span>
      <span className='price'>
        <b>Price: ${price}</b>
      </span>
      <span className='quantity'>
        <b>Quantity: {quantity}</b>
      </span>
      <button
        className='removeBtn'
        onClick={() =>
          removeFromCart({
            id,
            name,
            description,
            price,
            quantity
          })
        }
      >
        Remove Product
      </button>
      <div className='change-quantity'>
        <a
          onClick={() =>
            addToCarts({ id, name, description, price, quantity: 1 })
          }
        ></a>
      </div>
    </li>
  );
};

export default CartItem;
