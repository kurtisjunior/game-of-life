import React, { Component } from "react";
import Square from "./Square";
import "../css/board.css";

class Board extends Component {
  state = {
    grid: [],
    iterations: 0,
    playButton: false,
    speed: 500
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
        <button
          className="button-one"
          disabled={this.state.playButton}
          onClick={() => this.onSubmit()}
        >
          {" "}
          PLAY{" "}
        </button>
        <button className="button-two" onClick={() => this.stopIterations()}>
          {" "}
          STOP{" "}
        </button>
        <span className="iteration-count">
          Generations: {this.state.iterations}
        </span>
        <span className="speed">Speed: {this.state.speed / 1000}</span>
        <button
          className="faster"
          disabled={this.state.playButton}
          onClick={() => {
            this.changeSpeed("up");
          }}
        >
          faster
        </button>
        <button
          className="slower"
          disabled={this.state.playButton}
          onClick={() => {
            this.changeSpeed("down");
          }}
        >
          Slower
        </button>
      </>
    );
  }
  componentDidMount = () => {
    this.grid(50, 50);
  };

  grid = (colls, rows) => {
    const newGrid = new Array(colls);
    for (let i = 0; i < newGrid.length; i++) {
      newGrid[i] = new Array(rows);
    }

    for (let i = 0; i < newGrid.length; i++) {
      for (let j = 0; j < newGrid[i].length; j++) {
        newGrid[i][j] = 0;
      }
    }

    this.setState({
      grid: newGrid
    });
  };

  onSubmit = () => {
    const nextIteration = () => {
      const { grid } = this.state;
      const next = new Array(50);
      for (let i = 0; i < next.length; i++) {
        next[i] = new Array(50);
      }
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
          let neighbour = 0;
          let square = grid[i][j];
          neighbour +=
            grid[(((i - 1) % 50) + 50) % 50][(j - (1 % 50) + 50) % 50];
          neighbour += grid[(((i - 1) % 50) + 50) % 50][j];
          neighbour += grid[(((i - 1) % 50) + 50) % 50][(j + 1) % 50];
          neighbour += grid[i][(((j - 1) % 50) + 50) % 50];
          neighbour += grid[i][(j + 1) % 50];
          neighbour += grid[(i + 1) % 50][(((j - 1) % 50) + 50) % 50];
          neighbour += grid[(i + 1) % 50][j];
          neighbour += grid[(i + 1) % 50][(j + 1) % 50];
          if (square === 0 && neighbour === 3) {
            next[i][j] = 1;
          } else if (square === 1 && (neighbour < 2 || neighbour > 3)) {
            next[i][j] = 0;
          } else {
            next[i][j] = square;
          }
        }
      }
      let newIteration = this.state.iterations;
      newIteration += 1;
      this.setState({
        grid: next,
        iterations: newIteration,
        playButton: true
      });
    };
    const newIteration = () => {
      this.stop = setInterval(() => {
        nextIteration();
      }, this.state.speed);
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
    this.setState({
      playButton: false
    });
  };

  changeSpeed = direction => {
    let speed = this.state.speed;
    if (direction === "up" && speed > 31.25) {
      speed = speed / 2;
    } else if (direction === "down" && speed < 1000) {
      speed = speed * 2;
    }
    this.setState({
      speed: speed
    });
  };
}

export default Board;
