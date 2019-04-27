import React, { Component } from "react";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: {}
    };
  }

  //   componentDidMount() {
  //     axios.get(url).then(res => {
  //       this.setState({ foods: res.data });
  //     });
  //   }

  render() {
    //   const favoriteBox = this.state.foods.map(food => (
    //       <div>{foods.hits.recipe.image}</div>
    //   ))
    return (
      <div>
        <div className="rightMenuBox">
          <button className="rightMenuBtn">Shopping List</button>
        </div>
      </div>
    );
  }
}

export default ShoppingList;
