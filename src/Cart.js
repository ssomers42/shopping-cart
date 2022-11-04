import ShopItem from './ShopItem';

const Cart = ({ currentTab, cart, handleCartUpdate, handleProductClick }) => {
  const cartItem = cart.map((ele) => {
    return <ShopItem item={ele} handleProductClick={handleProductClick} />;
  });
  console.log(currentTab, 'Cart');
  if (currentTab === 'Cart') {
    return (
      <div>
        <h1>Hello from Cart</h1>
        {cartItem}
      </div>
    );
  }
};

export default Cart;
