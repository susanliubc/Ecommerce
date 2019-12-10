import React from 'react';

const CartItem = ({
  cartItem: { id, name, description, img, price, quantity },
  removeFromCart
}) => {
  return (
    <div className='cartItem'>  
      <img src={img} alt='loading cartItem' className='cartImg'></img>
      <span className="name">{name}</span>
      <span className="price">
        <b>Price: ${price}</b>
      </span>
      <span className="quantity">
        <b>Quantity: {quantity}</b>
      </span>
      <button
        className='removeBtn'
        onClick={() =>
          removeFromCart({
            id,
            name,
            description,
            img,
            price,
            quantity
          })
        }
      >
        Remove Product
      </button>
    </div>
  );
};

export default CartItem;
