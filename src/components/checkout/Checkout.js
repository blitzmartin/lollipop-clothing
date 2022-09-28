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
    <div>
      <h1>CHECKOUT</h1>
      <div className="checkout-container">
        {cartItems.map((item) => { 
          return <CheckoutItem key={item.id} item={item} />;
        })}
      </div>
      <h3>TOTAL: 0$</h3>
    </div>
  );
}
