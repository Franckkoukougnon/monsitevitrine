import React from "react";

function MenuAfroItems({ imageAfro, nameAfro, prixAfro }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${imageAfro})` }}></div>
      <p>{nameAfro}</p>
      <p>{prixAfro}</p>
    </div>
  );
}

export default MenuAfroItems;
