const ShopItem = ({ item, handleProductClick }) => {
  const { id, title, price, description, category, image } = item;
  return (
    <div className="shop-item fade-in">
      <div className="product-image-wrapper">
        <img className="product-image" src={image} alt={title} />
      </div>
      <h3 className="product-title">{title}</h3>
      <h4 className="product-price">${price}</h4>
      <button onClick={(e) => handleProductClick(e, item)}>
        <svg className="add-button" width="24" height="24">
          <path d="M12 1.5C6.202 1.5 1.5 6.202 1.5 12S6.202 22.5 12 22.5 22.5 17.798 22.5 12 17.798 1.5 12 1.5Zm4.5 11.063a.188.188 0 0 1-.188.187H12.75v3.563a.188.188 0 0 1-.188.187h-1.124a.188.188 0 0 1-.188-.188V12.75H7.687a.188.188 0 0 1-.187-.188v-1.124c0-.104.084-.188.188-.188h3.562V7.687c0-.103.084-.187.188-.187h1.124c.104 0 .188.084.188.188v3.562h3.563c.103 0 .187.084.187.188v1.124Z" />
        </svg>
        Add to cart
      </button>
    </div>
  );
};

export default ShopItem;
