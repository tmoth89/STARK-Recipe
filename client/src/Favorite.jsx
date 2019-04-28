import React, { Component } from "react";

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: {}
    };
  }

  // componentDidMount() {
  //   getFavorite();
  // }

  // getFavorite() {
  //   axios.get("http://localhost:3000/mainFavorite").then(res => {
  //     this.setState({ foods: res.data });
  //   });
  // }

  render() {
    //   const favoriteBox = this.state.foods.map(food => (
    //       <div>{foods.hits.recipe.image}</div>
    //   ))
    return (
      <div>
        <div className="rightMenuBox">
          <button className="rightMenuBtn">Favorite</button>
        </div>
      </div>
    );
  }
}

export default Favorite;
