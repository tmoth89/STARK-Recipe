import React, { Component } from "react";
import ReactDOM from "react-dom";

import Search from "./Search.jsx";
import RightMenu from "./RightMenu.jsx";

class App extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }
  render() {
    return (
      <div>
        <div id="mainContainer">
          <Search />
          <div>Weclome to the Start Recipes!</div>
          <RightMenu />
        </div>
      </div>
    );
  }
}

export default App;
