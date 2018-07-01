import React, { Component } from "react";
import { getReducedColor } from "./randomColorGenerator.js";
import Tier3 from "./Tier3";

export default class Tier2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childColor: getReducedColor(this.props.color)
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChildClick = this.handleChildClick.bind(this);
  }
  handleClick(e) {
    e.stopPropagation();
    this.props.changeColor();
  }
  handleChildClick(e) {
    e.stopPropagation();
    this.props.changeChildColor();
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div
        className="tier2"
        style={{ backgroundColor: this.props.color, color: this.props.color }}
        onClick={this.handleClick}
      >
        <Tier3
          color={this.props.childColor}
          handleChildClick={this.handleChildClick}
        />
        <Tier3
          color={this.props.childColor}
          handleChildClick={this.handleChildClick}
        />
      </div>
    );
  }
}
