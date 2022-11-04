import react, { useEffect, useState } from 'react';
import Home from './Home';
import Cart from './Cart';
import NavBar from './Navbar';
import './css/app.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [currentTab, setTab] = useState('Home');

  const handleCartUpdate = (item) => {
    setCart((cart) => [...cart, item]);
  };

  const handleProductClick = (e, item) => {
    let button = e.target;
    let icon = button.querySelector('path');
    icon.classList.add('added-to-cart');
    handleCartUpdate(item);
  };

  //useEffect tab to update rendering when tab changes

  return (
    <div id="content">
      <NavBar setTab={setTab} cart={cart} />
      <Home
        currentTab={currentTab}
        cart={cart}
        handleCartUpdate={handleCartUpdate}
        handleProductClick={handleProductClick}
      />
      <Cart
        currentTab={currentTab}
        cart={cart}
        handleCartUpdate={handleCartUpdate}
        handleProductClick={handleProductClick}
      />
    </div>
  );
};

export default App;
