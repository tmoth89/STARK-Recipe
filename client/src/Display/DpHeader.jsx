import React, { Component } from "react";

class DpHeader extends Component {
  render() {
    <div id="dpheader">
      <img id="foodImg" src={this.props.image} />
      <h3>{this.props.label}</h3>
      <p>see full recipe on: {this.props.source}</p>

      <button> Save </button>
    </div>;
  }
}
export default DpHeader;
