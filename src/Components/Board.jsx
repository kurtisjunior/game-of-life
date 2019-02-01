import React, { Component } from "react";
import Square from "./Square";

class Board extends React.Component {
  state = {
    grid: []
  };

  renderSquare(v, y, x) {
    return <Square value={v} y={y} x={x} buttonClick={this.buttonClick} />;
  }

  render() {
    return this.state.grid.length === 0 ? (
      <div> loading </div>
    ) : (
      <>
        <div className="my-grid">
          {this.state.grid.map((col, y) => {
            return col.map((v, x) => {
              return this.renderSquare(v, y, x);
            });
          })}
        </div>

        <button onClick={() => this.onSubmit()}> PLAY </button>
        <button onClick={() => this.stopIterations()}> STOP </button>
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
        newGrid[i][j] = 0;
        // newGrid[i][j] = Math.floor(Math.random() * 2);
      }
    }

    this.setState({
      grid: newGrid
    });
  };

  onSubmit = button => {
    const nextIteration = () => {
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
            let square = grid[i][j];
            neighbour += grid[i - 1][j - 1];
            neighbour += grid[i - 1][j];
            neighbour += grid[i - 1][j + 1];
            neighbour += grid[i][j - 1];
            neighbour += grid[i][j + 1];
            neighbour += grid[i + 1][j - 1];
            neighbour += grid[i + 1][j];
            neighbour += grid[i + 1][j + 1];
            if (square === 0 && neighbour === 3) {
              next[i][j] = 1;
            } else if (square === 1 && (neighbour < 2 || neighbour > 3)) {
              next[i][j] = 0;
            } else {
              next[i][j] = square;
            }
          }
        }
      }
      this.setState({
        grid: next
      });
    };
    const newIteration = () => {
      this.stop = setInterval(() => {
        nextIteration();
      }, 500);
    };
    newIteration();
  };

  buttonClick = (v, y, x) => {
    let newGrid = this.state.grid.slice();
    if (v === 0) newGrid[y][x] = 1;
    else if (v === 1) newGrid[y][x] = 0;
    this.setState({
      grid: newGrid
    });
  };

  stopIterations = () => {
    clearInterval(this.stop);
  };
}

export default Board;
