import React, { Component } from "react";

<<<<<<< HEAD
class Favorite extends Component {
  constructor() {
   super(props)
  }



const url =
  "https://api.edamam.com/search?q=chicken&app_id=f8182a87&app_key=5f5f6bf45e7dd3b097216f12c9208fbb&from=0&to=3&calories=591-722&health=alcohol-free";

class Favorite extends Component {
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
          <button className="rightMenuBtn">Favorite</button>
        </div>
      </div>
    );
  }

}

export default Favorite;
