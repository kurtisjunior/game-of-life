import React, { Component } from "react";
import index from "./css/index.css";

class App extends Component {
  render() {
    return <Game />;
  }
}
export default App;

class Square extends React.Component {
  render() {
    return (
      <button className={this.props.value === 1 ? "square" : "square-two"}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  state = {
    grid: []
  };

  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    return this.state.grid.length === 0 ? (
      <div> loading </div>
    ) : (
      <div className="my-grid">
        {this.state.grid.map(col => {
          return col.map(row => {
            return this.renderSquare(row);
          });
        })}
      </div>
    );
  }
  componentDidMount = () => {
    this.grid(30, 30);
  };

  grid = (colls, rows) => {
    const newGrid = new Array(colls);
    for (let i = 0; i < newGrid.length; i++) {
      newGrid[i] = new Array(rows);
    }

    for (let i = 0; i < newGrid.length; i++) {
      for (let j = 0; j < newGrid[i].length; j++) {
        newGrid[i][j] = Math.floor(Math.random() * 2);
      }
    }

    this.setState({
      grid: newGrid
    });
  };
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

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
