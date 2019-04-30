import React, { Component } from "react";
import ReactDOM from "react-dom";

import Search from "./Search.jsx";
import RightMenu from "./RightMenu.jsx";

class App extends Component {
  render() {
    return (
      <div>

        <div id="mainContainer">
          <Search/>
          <div>Weclome to the Stark Recipes!</div>
          <RightMenu/>

        <div>
          <Search />
      </div>
    );
  }
}

export default App;
