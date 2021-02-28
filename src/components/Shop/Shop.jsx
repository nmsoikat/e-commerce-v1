import React, { useState } from "react";
import "./Shop.css";
import fakeData from "./../../fakeData/index";
import Product from "../Product/Product";
import Cart from './../Cart/Cart';

function Shop(props) {
  const first10 = fakeData.slice(0, 10);

  const [products, setProducts] = useState(first10);

  const [cart, setCart] = useState([])

  function addProductHandler(event, product){
    const newCart = [...cart, product]
    setCart(newCart)
  }

  return (
    <div className="shop_card-wrap">
      <div className="shop">
        <h2>All Products</h2>
        
        {products.map(item => {
          return <Product addProductHandler={addProductHandler} product={item}></Product>
        })}
        
      </div>
      <div className="card">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}

export default Shop;
