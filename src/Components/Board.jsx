import React, { Component } from "react";
import Square from "./Square";
import { gridSize } from "../utility/constant.js";
import {
  evolveGrid,
  createGameGrid,
  createNewGrid
} from "../utility/gameLogic";
import "../css/board.css";

class Board extends Component {
  state = {
    grid: [],
    generations: 0,
    playButton: false,
    speed: 500,
    gridSize: gridSize
  };

  renderSquare(value, y, x) {
    return <Square value={value} y={y} x={x} buttonClick={this.buttonClick} />;
  }

  render() {
    const { grid, generations, playButton, speed } = this.state;

    return (
      <>
        <div className="my-grid">
          {grid.map((col, y) => {
            return col.map((value, x) => {
              return this.renderSquare(value, y, x);
            });
          })}
        </div>
        <button
          className="button-one"
          disabled={playButton}
          onClick={() => this.onSubmit()}
        >
          {" "}
          PLAY{" "}
        </button>
        <button className="button-two" onClick={() => this.stopIterations()}>
          {" "}
          STOP{" "}
        </button>
        <span className="iteration-count">Generations: {generations}</span>
        <span className="speed">Speed: {speed / 1000}</span>
        <button
          className="faster"
          disabled={playButton}
          onClick={() => {
            this.changeSpeed("up");
          }}
        >
          faster
        </button>
        <button
          className="slower"
          disabled={playButton}
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
    this.grid(gridSize, gridSize);
  };

  grid = (colls, rows) => {
    const grid = createGameGrid(colls, rows);

    this.setState({
      grid
    });
  };

  onSubmit = () => {
    const nextGeneration = () => {
      const { grid, generations } = this.state;

      let nextGrid = createNewGrid(gridSize);

      evolveGrid(grid, nextGrid, gridSize);

      let generationCount = generations;
      generationCount += 1;

      this.setState({
        grid: nextGrid,
        generations: generationCount,
        playButton: true
      });
    };

    const continueGenerations = () => {
      const { speed } = this.state;
      this.stop = setInterval(() => {
        nextGeneration();
      }, speed);
    };
    continueGenerations();
  };

  buttonClick = (value, y, x) => {
    const { grid } = this.state;
    let updateGrid = grid.slice();
    if (value === 0) updateGrid[y][x] = 1;
    else if (value === 1) updateGrid[y][x] = 0;
    this.setState({
      grid: updateGrid
    });
  };

  stopIterations = () => {
    clearInterval(this.stop);
    this.setState({
      playButton: false
    });
  };

  changeSpeed = direction => {
    const { speed } = this.state;
    let newSpeed = speed;
    if (direction === "up" && newSpeed > 31.25) {
      newSpeed = newSpeed / 2;
    } else if (direction === "down" && newSpeed < 1000) {
      newSpeed = newSpeed * 2;
    }
    this.setState({
      speed: newSpeed
    });
  };
}

export default Board;
