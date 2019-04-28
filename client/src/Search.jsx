import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      value: ""
    };
  }
  searchMenu(e) {
    // e.preventDefault();
    axios.post("/search", { e }).then(function(response) {
      console.log("work work work", response);
    }); // connect to the detail page
    // console.log("event handler is working", e);
  }

  render() {
    return (
      <div>
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
          className="searchBtn"
          onClick={event => this.searchMenu(this.state.value)}
        >
          {" "}
          Search{" "}
        </button>
      </div>
    );
  }
}

export default Search;
