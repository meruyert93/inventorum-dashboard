import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { MenuList, MenuItem as typeMenuItem } from "./Types";

function Sidebar() {
  const [activeMenuItem, setActiveMenuItem] =
    useState<typeMenuItem>("Contacts");

  const handleMenuItemClick = (name: typeMenuItem) => {
    setActiveMenuItem(name);
  };

  return (
    <Menu pointing vertical fluid borderless size="massive">
      {MenuList.map((menuItem: typeMenuItem) => {
        return (
          <Menu.Item
            name={menuItem}
            key={menuItem}
            active={activeMenuItem === menuItem}
            onClick={() => handleMenuItemClick(menuItem)}
          />
        );
      })}
    </Menu>
  );
}

export default Sidebar;
