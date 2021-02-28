import React from 'react';

import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
  // console.log(props.product);

  return (
    <div className="product-wrap">
      <div className="product-img">
        <img src={props.product.img} alt=""/>
      </div>
      <div className="product-content">
        <h2 className="productTitle" >{props.product.name}</h2>
        <p>Price: {props.product.price} $</p>
        <button className="addToCartBtn" onClick={(event) => props.addProductHandler(event, props.product)} >{<FontAwesomeIcon icon={faShoppingCart}/>}Add to cart</button>
      </div>
    </div>
  );
};

export default Product;