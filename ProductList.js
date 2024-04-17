// ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, title: 'Naruto', price: 20, image: 'naruto.jpg' },
  { id: 2, title: 'One Piece', price: 25, image: 'one_piece.jpg' },
  { id: 3, title: 'Dragon Ball Z', price: 22, image: 'dragon_ball_z.jpg' }
];

function ProductList({ addToCart }) {
  return (
    <div>
      <h2>Anime Products</h2>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={require(`../images/${product.image}`).default} alt={product.title} />
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
import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, title: 'Naruto', price: 20, description: 'A popular anime about ninja adventures.', image: 'naruto.jpg' },
  { id: 2, title: 'One Piece', price: 25, description: 'A pirate-themed adventure anime.', image: 'one_piece.jpg' },
  { id: 3, title: 'Dragon Ball Z', price: 22, description: 'An iconic anime about martial arts and superpowers.', image: 'dragon_ball_z.jpg' }
];

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const product = products.find(item => item.id === parseInt(id));

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={require(`../images/${product.image}`).default} alt={product.title} />
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;