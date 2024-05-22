// ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, title: 'Naruto', price: 20, image: 'naruto.jpg' },
  { id: 2, title: 'One Piece', price: 25, image: 'action-figure-one-piece.png' },
  { id: 3, title: 'Dragon Ball Z', price: 22, image: 'action-figure-dragon-ball.png' }
];

function ProductList({ addToCart }) {
  return (
    <div>
      <h2>Anime Products</h2>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={`./images/${product.image}`} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </Link>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
