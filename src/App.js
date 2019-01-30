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

  renderSquare(v, i) {
    return <Square value={v} key={i} />;
  }

  render() {
    return this.state.grid.length === 0 ? (
      <div> loading </div>
    ) : (
      <>
        <div className="my-grid">
          {this.state.grid.map(col => {
            return col.map((v, i) => {
              return this.renderSquare(v, i);
            });
          })}
        </div>
        <button onClick={() => this.onSubmit()}> PLAY </button>
      </>
    );
  }
  componentDidMount = () => {
    this.grid(10, 10);
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

  onSubmit = () => {
    const { grid } = this.state;

    const next = new Array(10);
    for (let i = 0; i < next.length; i++) {
      next[i] = new Array(10);
    }
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (
          i === 0 ||
          i === grid[i].length - 1 ||
          j === 0 ||
          j === grid[i].length - 1
        ) {
          next[i][j] = grid[i][j];
        } else {
          let neighbour = 0;
          neighbour += grid[i - 1][j - 1];
          neighbour += grid[i - 1][j];
          neighbour += grid[i - 1][j + 1];
          neighbour += grid[i][j - 1];
          neighbour += grid[i][j + 1];
          neighbour += grid[i + 1][j - 1];
          neighbour += grid[i + 1][j];
          neighbour += grid[i + 1][j + 1];
          if (neighbour < 2 || neighbour > 3) {
            next[i][j] = 0;
          } else if (neighbour === 2 || neighbour === 3) {
            next[i][j] = 1;
          }
        }
      }
    }
    this.setState({
      grid: next
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
