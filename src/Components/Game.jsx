import React, { Component } from "react";
import Board from "../Components/Board";
import index from "../css/board.css";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

export default Game;
