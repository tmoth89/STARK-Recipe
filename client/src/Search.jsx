import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      value: "",
      foods: []
    };
  }
  searchMenu(e) {
    // e.preventDefault();
    axios.post("/search", { e }).then(function(res) {
      console.log("work work work", res);
    }); // connect to the detail page
    // console.log("event handler is working", e);
  }

  render() {
    return (
      <div id="searchheader">
        <div id="logo">Stark Recipe Finder</div>
        <div id="searchbox">
          <input
            type="text"
            name="searchbar"
            id="searchbar"
            value={this.state.value}
            placeholder="Find the best recipes from across the web!"
            onChange={e => {
              this.setState({ value: e.target.value });
            }}
          />
          <button
            id="searchBtn"
            onClick={event => this.searchMenu(this.state.value)}
          >
            {" "}
            Search{" "}
          </button>
        </div>

        <button id="login">Login</button>
      </div>
    );
  }
}

export default Search;
