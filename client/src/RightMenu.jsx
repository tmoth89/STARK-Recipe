import React, { Component } from "react";

import ShoppingList from "./ShoppingList.jsx";
import Favorite from "./Favorite.jsx";

const RightMenu = props => {
  return (
    <div id="rightMenuContainer">
      <Favorite />
      <ShoppingList />
    </div>
  );
};

export default RightMenu;
