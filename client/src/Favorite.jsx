import React, { Component } from "react";
import axios from "axios";
import Collapsible from "react-collapsible";

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      selectedMenu: ""
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3000/mainFavorite").then(res => {
      console.log(res);
      this.setState({ foods: res.data });
    });
  }

  render() {
    const favoriteBox = this.state.foods.map(food => (
      <button className="menuBox" key={food.label}>
        {food.hits.recipe.image} {food.hits.recipe.label}
      </button>
    ));

    const FavoriteBoxTrigger = () => (
      <button className="rightMenuBtn">Favorite</button>
    );

    return (
      <div>
        {/* <div className="rightMenuBox"> */}
        <Collapsible trigger={<FavoriteBoxTrigger />} transitionTime={200}>
          <div>{favoriteBox}</div>
        </Collapsible>
        {/* </div> */}
      </div>
    );
  }
}

export default Favorite;
