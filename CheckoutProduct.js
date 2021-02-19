import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, image, price, rating }) {
  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct__image" src={image} alt="" />
      <div className="checkoutproduct__info">
        <p className="checkoutproduct__title">{title}</p>
        <p className="checkoutproduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <p className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <span>⭐</span>
            ))}
        </p>
        <button className="checkoutproduct__button">Remove from basket </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
