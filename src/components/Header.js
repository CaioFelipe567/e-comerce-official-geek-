// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartItemCount }) {
  return (
    <header>
      <h1>Anime Store</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart ({cartItemCount})</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
