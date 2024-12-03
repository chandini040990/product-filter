import {useState, useEffect} from "react";

import Cart from "./components/Cart";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";

function App() {
  const[products, setProducts] = useState([]);
  const[cart, setCart] = useState([]);
  const[category, setCategory] = useState('all');

  // use the useEffect to fetch the data from the API

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();

  }, []);

  const addToCart = (product) => {
    setCart([...cart, product])
  };

  // filter products based on the category

  const filterProducts = 
  category === 'all' ? products : products.filter((product) => product.category === category)

  return (

    <>
     <div className="app">
      <h1 className="navbar">shopping application</h1>

      <Filter setCategory = {setCategory} />
      <Cart cart = {cart} />
      <ProductList products = {filterProducts} addToCart = {addToCart} />
    
     </div>
    
    </>
  )

}

export default App