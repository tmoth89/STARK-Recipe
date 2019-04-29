import React, { Component } from "react";
import axios from "axios";

class CardDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
      image: "",
      source: "",
      yield: 1,
      ingredientLines: [],
      calories: 0,
      fats: 0,
      carbs: 0,
      protein: 0
    };
  }

  // componentDidMount() {
  //   getMenuInfo();
  // }

  // getMenuInfo() {
  //   axios.get("http://localhost:3000/mainFavorite").then(res => {
  //     this.setState({ foods: res.data });
  //   });
  // }

  render() {
    <div id="mainbody">
      <div id="descriptionContainer">
        <img id="foodImg" src={this.state.image} />
        <h3 id="label">{this.state.label}</h3>
        <p>see full recipe on: {this.state.source}</p>
        <button> Save </button>
      </div>
      <div id="ingredients">{this.state.ingredientLines}</div>

      <div id="nutirion">
        Nutrition <br />
        {this.state.calories}
        {this.state.yield}
        <br />
        {this.state.fats}
        {this.state.carbs}
        {this.state.protein}
      </div>
    </div>;
  }
}

export default CardDisplay;
