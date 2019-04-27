import React, { Component } from "react";
import ReactDOM from "react-dom";

import Search from "./Search.jsx";
import Favorite from "./Favorite.jsx";
import ShoppingList from "./ShoppingList.jsx";
import { timingSafeEqual } from "crypto";

class App extends Component {
  constructor() {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Search />
        <h1>Weclome to the Start Recipes!</h1>
        <Favorite />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
