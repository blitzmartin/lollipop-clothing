import "./checkout-item.styles.scss";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function CheckoutItem({item}) {
    const {name, price, imageUrl, quantity} = item;
    const { addItemToCart, removeItemfromCart } = useContext(CartContext);
    return(
        <div className="checkout-item-container">
            <img alt={name} src={imageUrl} />
            <h2>{name}</h2>
            <button onClick={() => removeItemfromCart(item) }> - </button>
            <span>{quantity}x </span>
            <button onClick={() => addItemToCart(item) }> + </button>
            <span> {price}$</span>
        </div>
    )
}