import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ShoppingIcon , CartIconContainer, ItemCount } from "./cart-icon.styles.js";

export default function CartIcon() {

  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);


  return (
    <CartIconContainer onClick={toggleIsCartOpen} >
      <ShoppingIcon  />
      <ItemCount >{cartCount}</ItemCount >
    </CartIconContainer>
  );
}
