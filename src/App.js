import React, { Component } from "react";
import Game from "./Components/Game";
import index from "./css/index.css";

class App extends Component {
  render() {
    return <Game />;
  }
}
export default App;

{
  /* <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(0)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div> */
}

//square dead and has three neightbours then it's born
//square alive and has less than 2 neighbours or more than 3 it dies
//otherwise a live cell lives and a dead cell remains dead

// RIGHT
// if (grid[i][j] === 0 && neighbour === 3) {
//     next[i][j] = 1;
//   } else if (grid[i][j] === 1 && (neighbour < 2 || neighbour > 3)) {
//     next[i][j] = 0;
//   } else {
//     next[i][j] = grid[i][j];
//   }

//WRONG
// if (neighbour < 2 || neighbour > 3) {
//     next[i][j] = 0;
//   } else if (neighbour === 2 || neighbour === 3) { -------> === 2 is incorrect. Otherwise its fine
//     next[i][j] = 1;
//   } else {
//     next[i][j] = grid[i][j];
//   }
