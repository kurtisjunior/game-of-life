import React, { Component } from "react";

class Square extends Component {
  render() {
    const { buttonClick, value, y, x } = this.props;
    return (
      <button
        onClick={() => buttonClick(value, y, x)}
        className={value === 1 ? "square" : "square-two"}
      >
        {value}
      </button>
    );
  }
}

export default Square;
