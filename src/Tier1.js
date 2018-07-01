import React, { Component } from "react";
import { getRandomColor, getReducedColor } from "./randomColorGenerator.js";
import Tier2 from "./Tier2";

export default class Tier1 extends Component {
  constructor(props) {
    super(props);
    const initialColor = getRandomColor();
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor),
      grandChildColor: getReducedColor(getReducedColor(initialColor))
    };
    this.setChildColor = this.setChildColor.bind(this);
    this.setGrandChildColor = this.setGrandChildColor.bind(this);
  }

  setColor() {
    let newColor = getRandomColor();
    this.setState({
      color: newColor
    });
    this.setChildColor(newColor);
  }

  setChildColor(baseColor) {
    let newColor;
    if (baseColor === undefined) {
      newColor = getRandomColor();
    } else {
      newColor = getReducedColor(baseColor);
    }
    this.setState({
      childColor: newColor
    });
    this.setGrandChildColor(newColor);
  }

  setGrandChildColor(baseColor) {
    let newColor;
    if (baseColor === undefined) {
      newColor = getRandomColor();
    } else {
      newColor = getReducedColor(baseColor);
    }
    this.setState({
      grandChildColor: newColor
    });
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div
        onClick={() => {
          this.setColor();
        }}
        className="tier1"
        style={{ backgroundColor: this.state.color, color: this.state.color }}
      >
        <Tier2
          color={this.state.childColor}
          childColor={this.state.grandChildColor}
          changeColor={this.setChildColor}
          changeChildColor={this.setGrandChildColor}
        />
        <Tier2
          color={this.state.childColor}
          childColor={this.state.grandChildColor}
          changeColor={this.setChildColor}
          changeChildColor={this.setGrandChildColor}
        />
      </div>
    );
  }
}
