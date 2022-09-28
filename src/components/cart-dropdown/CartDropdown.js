import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import "./cart-dropdown.styles.scss";

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}
