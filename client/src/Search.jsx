import React, { Component } from "react";

<<<<<<< HEAD
class Search extends Component {
  constructor() {}
}
=======
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
>>>>>>> c8ac0407bbb01006a098679cc3314da1c936cd90

export default Search;
