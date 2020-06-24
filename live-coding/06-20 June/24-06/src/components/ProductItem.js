import React from "react";

const ProductItem = (props) => {
  const { id, productName, icon, price, inventory } = props.info;
  return (
    <ul key={id}>
      {productName}
      <i>{icon}</i>
      <h5>{price}</h5>
      <button onClick="" disabled={inventory === 0}>
        {inventory > 0 ? "Add to cart" : "Sold out"}
      </button>
    </ul>
  );
};

export default ProductItem;
