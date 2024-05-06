// Cart.js
import React from 'react';

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.title} - ${item.price} <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
}

export default Cart;
