import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);

  const handleClick = () => {
    dispatch({
      type: "add_to_basket",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
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
      </div>
      <img className="product__image" src={image} alt="" />
      <button onClick={handleClick} className="product__button">
        ADD TO BASKET
      </button>
    </div>
  );
}

export default Product;
