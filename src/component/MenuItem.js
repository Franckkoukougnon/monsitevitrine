import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}

export default MenuItem;
