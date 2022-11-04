import React, { useState, useEffect } from 'react';
import ShopItem from './ShopItem';
import getShopItems from './getShopItems';
import FilterPills from './FilterPills';
import heroBanner from './hero-banner.png';

const Home = ({ currentTab, handleCartUpdate, handleProductClick }) => {
  const [products, setProducts] = useState();
  const [productList, setProductList] = useState();
  const [sortedProducts, setSortedProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const items = await getShopItems();
    createCategories(items);
    setProductList(createProductList(items));
    setProducts(items);
  };

  useEffect(() => {
    if (products) {
      setProductList(createProductList(products));
    }
  }, [activeCategory]);

  const createProductList = (products) => {
    if (activeCategory === 'all') {
      return products.map((ele) => {
        return <ShopItem item={ele} handleProductClick={handleProductClick} />;
      });
    } else {
      return sortedProducts.map((ele) => {
        if (ele.category === activeCategory) {
          return ele.itemList.map((ele) => {
            return (
              <ShopItem item={ele} handleProductClick={handleProductClick} />
            );
          });
        }
      });
    }
  };

  //traverse products
  //check category of each product
  //if category is new, create new category object in array
  //if category exists, add product to category object list
  //return array of objects
  const createCategories = (items) => {
    let sortedProducts = [];
    let categories = [];
    items.forEach((arr) => {
      if (!categories.includes(arr.category)) {
        sortedProducts.push({ category: arr.category, itemList: [arr] });
        categories.push(arr.category);
      } else {
        sortedProducts.forEach((ele, ind) => {
          if (ele.category === arr.category)
            sortedProducts[ind].itemList.push(arr);
        });
      }
    });
    setSortedProducts(sortedProducts);
    setProductCategories(categories);
  };

  const handleFilterUpdate = (e, ele) => {
    let button = e.target;
    let activeButton = document.querySelector('.active-filter');
    activeButton.classList.remove('active-filter');
    button.classList.add('active-filter');
    setActiveCategory(ele);
    setProductList(createProductList(products));
  };

  if (currentTab === 'Home') {
    return (
      <div>
        <div id="hero-banner">
          <img src={heroBanner} alt="#" />
        </div>
        <h2>Products</h2>
        <FilterPills
          categories={productCategories}
          handleFilterUpdate={handleFilterUpdate}
        />
        <ul className="product-list">{productList}</ul>
      </div>
    );
  }
};

export default Home;
