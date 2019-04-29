import React, { Component } from "react";
//This file displays 4 x 4 boxes of recipes elements and needs to be linked to other pages via react router.
class RecipeElement extends Component {
  constructor() {
    super(props);
    this.state = {};
  }

  render() {
    //Create array to render a 4 * 4 of commentContainer.
    let empArr = [];

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        empArr.push();
      }
    }

    return (
      <div className="commentContainer">
        <img src={this.props.image} height="1" width="1" />
        <div className="recipeName">{this.props.label}</div>
        <div className="containerLeft">{this.props.calories}</div>
        <div className="containerRight">{this.props.ingredientsLines}</div>
        <div className="lowerContainer">{this.props.url}</div>
      </div>
    );
  }
}

export default RecipeElement;
