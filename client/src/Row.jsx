import React from "react";
import Card from "./Card.jsx";

const Row = props => {
  const cardArr = [];
  for (let i = 0; i < 4; i += 1) {
    cardArr.push(
      <Card
        state={props.state}
        index={i + props.index}
        key={cardArr}
        changePage={props.changePage}
      />
    );
  }
  return <div>{cardArr}</div>;
};

export default Row;
