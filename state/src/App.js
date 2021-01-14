import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      answer: "yes",
    };
  }
  render() {
    return (
      <div>
        <h1>Is state component important ? {this.state.answer}</h1>
      </div>
    );
  }
}

export default App;
