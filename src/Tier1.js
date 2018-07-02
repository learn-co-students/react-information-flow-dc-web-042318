import React, { Component } from "react";
import { getRandomColor, getReducedColor } from "./randomColorGenerator.js";
import Tier2 from "./Tier2";

export default class Tier1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      childColor: getReducedColor(this.props.color),
      grandChildColor: getReducedColor(getReducedColor(this.props.color))
    };
  }

  handleClick = e => {
    e.stopPropagation();
    let newColor = getRandomColor();
    this.setState({
      color: newColor,
      childColor: getReducedColor(newColor)
    });
  };

  changeChildColor = color => {
    this.setState({
      childColor: color
    });
  };

  changeGrandchildColor = color => {
    this.setState({
      grandChildColor: color
    });
  };

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div
        onClick={this.handleClick}
        className="tier1"
        style={{ backgroundColor: this.state.color, color: this.state.color }}
      >
        <Tier2
          color={this.state.childColor}
          setColor={this.changeChildColor}
          childColor={this.state.grandChildColor}
          setChildColor={this.changeGrandchildColor}
        />
        <Tier2
          color={this.state.childColor}
          setColor={this.changeChildColor}
          childColor={this.state.grandChildColor}
          setChildColor={this.changeGrandchildColor}
        />
      </div>
    );
  }
}
