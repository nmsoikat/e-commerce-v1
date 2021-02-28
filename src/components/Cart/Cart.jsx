import React from 'react';

function Cart(props) {

  function formatNumber(number){
    return Number(number.toFixed(2));
  }
  const cartProducts = props.cart;
  const price = cartProducts.reduce((accumulator, current) => accumulator + current.price, 0)
  
  let  shippingCharge = 0
  if(price > 50){
    shippingCharge = 0
  } else if(price > 15){
    shippingCharge = 4.99
  } else if(price > 0){
    shippingCharge = 12.44
  }

  const tax = (price * 10) / 100;

  const offer = (price * 2) / 100;

  const grandTotal = (price + shippingCharge + tax) - offer;

  return (
    <div>
        <h2>Order Summery</h2>
        <p>Item Ordered: {cartProducts.length}</p>
        <p>Price: {formatNumber(price)} $</p>
        <p>Shipping Charge: {formatNumber(shippingCharge)} $</p>
        <p>Tax + VAT: {formatNumber(tax)}  $</p>
        <p>Offer: {formatNumber(offer)} $</p>
        <p><b>Total: {formatNumber(grandTotal)} $</b></p>
    </div>
  );
}

export default Cart;