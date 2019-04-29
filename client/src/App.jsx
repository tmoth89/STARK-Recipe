import React, { Component } from "react";
import ReactDOM from "react-dom";

import Search from "./Search.jsx";
import RightMenu from "./RightMenu.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Search />
        </div>
        <div id="mainContainer">
          <p>Weclome to the Stark Recipes!</p>
          <RightMenu />
        </div>
      </div>
    );
  }
}

export default App;
