import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CheckoutItem({ cartItem }) {
  const { name, price, imageUrl, quantity } = cartItem;
  const { addItemToCart, removeItemfromCart, clearItemfromCart } =
    useContext(CartContext);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img alt={name} src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={() => removeItemfromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </div>
      <span className="price">{price}$</span>
      <div
        className="remove-button"
        onClick={() => clearItemfromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
}
