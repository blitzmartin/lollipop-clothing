import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CheckoutItem({ cartItem }) {
  const { name, price, imageUrl, quantity } = cartItem;
  const { addItemToCart, removeItemfromCart, clearItemfromCart} = useContext(CartContext);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img alt={name} src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <button onClick={() => removeItemfromCart(cartItem)}> - </button>
      <span className="quantity">{quantity}x </span>
      <button onClick={() => addItemToCart(cartItem)}> + </button>
      <span className="price"> {price}$</span>
      <div className="remove-button" onClick={() => clearItemfromCart(cartItem)}>&#10005;</div>
    </div>
  );
}
