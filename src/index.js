import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = { selected: null };
  }

  render() {
    const { selected } = this.state;
    return (
      <div className="container">
        <div
          className={`box${selected === 1 ? " selected" : ""}`}
          onClick={() => this.setState({ selected: 1 })}
        />
        <div
          className={`box${selected === 2 ? " selected" : ""}`}
          onClick={() => this.setState({ selected: 2 })}
        />
        <div
          className={`box${selected === 3 ? " selected" : ""}`}
          onClick={() => this.setState({ selected: 3 })}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
