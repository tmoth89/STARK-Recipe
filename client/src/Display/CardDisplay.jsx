import React, { Component } from "react";
import axios from "axios";

// const url = '';

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

  render() {
    <div id="mainbody">
      <div id="descriptionContainer">
        <img id="foodImg" src={this.props.image} />
        <h3 id="label">{this.props.label}</h3>
        <p>see full recipe on: {this.props.source}</p>
        <button> Save </button>
      </div>
      <div id="ingredients">{this.props.ingredientLines}</div>

      <div id="nutirion">
        Nutrition <br />
        {this.props.calories}
        {this.props.yield}
        <br />
        {this.props.fats}
        {this.props.carbs}
        {this.props.protein}
      </div>
    </div>;
  }
}

export default CardDisplay;
