import React, { Component } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import "./App.css";
import Tier1 from "./Tier1.js";

let startingColor = getRandomColor();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tier1 color={startingColor} />
        <Tier1 color={startingColor} />
      </div>
    );
  }
}

export default App;
