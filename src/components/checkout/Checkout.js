import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./checkout.styles.scss";
import CheckoutItem from "../checkout-item/CheckoutItem";

export default function Checkout() {
  const { cartItems } = useContext(CartContext);

  /*   const sum = cartItems.map(item => item.price).reduce((total, currentSum) => currentSum + total, 0);
  console.log(sum);
  setTotal(sum); */

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">TOTAL: 0$</span>
    </div>
  );
}
