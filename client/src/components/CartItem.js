import React from 'react';

const CartItem = ({
  cartItem: { id, name, img, description, price, quantity },
  removeFromCart,
  addToCart,
  dropFromCart
}) => {
  return (
    <li className='cartItem'>
      <img
        src={`/photos/${img}.jpg`}
        alt='loading cartItem'
        className='cartImg'
      ></img>
      <span className='name'>{name}</span>
      <span className='price'>
        <b>Price: ${price}</b>
      </span>

      <div className='change-quantity'>
        <a
          href='#!'
          onClick={() =>
            addToCart({ id, name, img, description, price, quantity: 1 })
          }
        >
          <i className='material-icons'>add_circle_outline</i>
        </a>
        <span className='quantity'>
          <b>{quantity}</b>
        </span>
        <a
          href='#!'
          onClick={() =>
            dropFromCart({ id, name, img, description, price, quantity })
          }
        >
          <i className='material-icons'>remove_circle_outline</i>
        </a>
      </div>
      <button
        className='removeBtn'
        onClick={() =>
          removeFromCart({
            id,
            name,
            img,
            description,
            price,
            quantity
          })
        }
      >
        Remove
      </button>
    </li>
  );
};

export default CartItem;
