import React, { Component } from "react";
import { getRandomColor, getReducedColor } from "./randomColorGenerator.js";
import Tier3 from "./Tier3";

export default class Tier2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childColor: this.props.childColor
    };
  }

  handleClick = e => {
    e.stopPropagation();
    let newColor = getRandomColor();
    this.props.setColor(newColor);
    this.props.setChildColor(newColor);
  };

  handleChildClick = e => {
    e.stopPropagation();
    let newColor = getRandomColor();
    this.changeChildColor(newColor);
  };

  changeChildColor = color => {
    this.setState({
      childColor: color
    });
  };

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div
        onClick={this.handleClick}
        className="tier2"
        style={{ backgroundColor: this.props.color, color: this.props.color }}
      >
        <Tier3 color={this.state.childColor} setColor={this.handleChildClick} />
        <Tier3 color={this.state.childColor} setColor={this.handleChildClick} />
      </div>
    );
  }
}
