import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import {CartDropdownContainer, EmptyMessage, CartItems} from "./cart-dropdown.styles.js";

export default function CartDropdown() {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    setIsCartOpen(false);
    navigate('/checkout')
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length
          ? (
            cartItems.map((item) => {
              return <CartItem key={item.id} cartItem={item} />;
            })
          )
          : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )
        }

      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
}
