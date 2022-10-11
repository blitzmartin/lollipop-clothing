import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./product-card.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

export default function ProductCard(props) {
  
  const { name, price, imageUrl } = props.product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(props.product);

  return (
    <div className="product-card-container" >
      <img alt={name} src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <Button buttonType={ BUTTON_TYPE_CLASSES.inverted } onClick={addProductToCart}>ADD</Button>
    </div>
  );
}
