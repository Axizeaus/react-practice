import React, { Component } from "react";
import ClassInput from "./ClassInput";

class Count extends Component {
  render() {
    const { todos } = this.props;
    const count = todos.length;

    return (
      <div>
        <h2>count : {count}</h2>
      </div>
    );
  }
}

export default Count;
