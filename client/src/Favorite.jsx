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
    this.connectToRecipe = this.connectToRecipe.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:3000/mainFavorite").then(res => {
      this.setState({ foods: res.data });
    });
  }

  connectToRecipe(e) { }

  render() {
    const favoriteBox = this.state.foods.map(food => (
      <button
        className="menuBox"
        key={food.label}
        onClick={event => {
          this.connectToRecipe(even.target.value);
          this.setState({ selectedMenu: event.target.value });
        }}
      >
        {food.image_url} {food.label}
      </button>
    ));

    const FavoriteBoxTrigger = () => (
      <button className="rightMenuBtn">Favorite</button>
    );

    return (
      <div>
        <Collapsible trigger={<FavoriteBoxTrigger />} transitionTime={200}>
          <div>{favoriteBox}</div>
        </Collapsible>

        {/* </div> */}
      </div>
    );
  }

}

export default Favorite;
