import React from "react";

const Search = props => {
  return (
    <div id="searchheader">
      <div id="logo">Stark Recipe Finder</div>
      <div id="searchbox">
        <input
          type="text"
          name="searchbar"
          id="searchbar"
          value={props.searchStr}
          placeholder="Find the best recipes from across the web!"
          onChange={props.onChangeSearchStr}
        />
        <button id="searchBtn" onClick={props.searchStrMethod}>
          {" "}
          Search{" "}
        </button>
      </div>

      <button id="login">Login</button>
    </div>
  );
};

export default Search;
