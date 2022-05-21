import React from "react";

function MenuItem({ image, name, price, ingredient }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <p>{name}</p>
      <p>{price}</p>
      <p>{ingredient}</p>
    </div>
  );
}

export default MenuItem;
