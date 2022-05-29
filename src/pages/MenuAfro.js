import React from "react";
import MenuAfroItems from "../component/MenuAfroItems";
import "../style/Menu.css";

function MenuAfro() {
  return (
    <div className="menu">
      <p className="menuTitle"> Nos Plats</p>
      <div className="menuList">
        {MenuAfro.map((menuA, key) => {
          return (
            <MenuAfroItems
              key={key}
              imageAfro={menuA.imageAfro}
              nameAfro={menuA.nameAfro}
              prixAfro={menuA.prixAfro}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MenuAfro;
