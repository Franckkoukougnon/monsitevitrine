import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../component/MenuItem";
import "../style/Menu.css";
function Menu() {
  return (
    <div className="menu">
      <p className="menuTitle"> Nos Menus</p>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
