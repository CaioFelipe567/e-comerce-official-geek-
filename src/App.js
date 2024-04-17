// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <div className="App">
        <Header cartItemCount={cart.length} />
        <Switch>
          <Route exact path="/">
            <ProductList addToCart={addToCart} />
          </Route>
          <Route path="/product/:id">
            <ProductDetails addToCart={addToCart} />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

