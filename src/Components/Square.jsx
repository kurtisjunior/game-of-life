import React, { Component } from "react";

class Square extends React.Component {
  render() {
    return (
      <button
        onClick={() =>
          this.props.buttonClick(this.props.value, this.props.y, this.props.x)
        }
        className={this.props.value === 1 ? "square" : "square-two"}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Square;
