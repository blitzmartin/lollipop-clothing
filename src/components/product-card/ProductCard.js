import "./product-card.styles.scss";
import Button from "../button/Button";

export default function ProductCard(props) {
  const { id, name, price, imageUrl } = props.product;
  return (
    <div className="product-card-container" >
      <img alt={name} src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <Button buttonType="inverted">ADD</Button>
    </div>
  );
}
