import React from 'react'
import './App.css';

function CartItem(props) {
  return (
    <div class="list-group-item">
      <div class="row">
        <div class="col-md-8">{props.cartItem.product.name}</div>
        <div class="col-md-2">{props.cartItem.product.priceInCents}</div>
        <div class="col-md-2">{props.cartItem.quantity}</div>
      </div>
    </div>
  );
}


export default CartItem;
