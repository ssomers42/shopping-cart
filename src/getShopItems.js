const getShopItems = async () => {
  const productList = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );
  // .then((json) => json.map((ele) => ele.image));
  return productList;
};

export default getShopItems;
