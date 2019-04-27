import React, { Component } from "react";


class Search extends Component {
  constructor() {}
}

const Search = props => {
  return (
    <div>
      <form autoComplete="on">
        <input
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="Find the best recipes from across the web!"
        />
        <input type="submit" />
      </form>
    </div>
  );
};


export default Search;
