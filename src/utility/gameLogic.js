const createGameGrid = (colls, rows) => {
  const grid = new Array(colls);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(rows);
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = 0;
    }
  }
  return grid;
};

const createNewGrid = gridSize => {
  const grid = new Array(gridSize);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(gridSize);
  }
  return grid;
};

const evolveGrid = (grid, nextGrid, gridSize) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let neighbour = 0;
      let square = grid[i][j];
      neighbour +=
        grid[(((i - 1) % gridSize) + gridSize) % gridSize][
          (j - (1 % gridSize) + gridSize) % gridSize
        ];
      neighbour += grid[(((i - 1) % gridSize) + gridSize) % gridSize][j];
      neighbour +=
        grid[(((i - 1) % gridSize) + gridSize) % gridSize][(j + 1) % gridSize];
      neighbour += grid[i][(((j - 1) % gridSize) + gridSize) % gridSize];
      neighbour += grid[i][(j + 1) % gridSize];
      neighbour +=
        grid[(i + 1) % gridSize][(((j - 1) % gridSize) + gridSize) % gridSize];
      neighbour += grid[(i + 1) % gridSize][j];
      neighbour += grid[(i + 1) % gridSize][(j + 1) % gridSize];
      if (square === 0 && neighbour === 3) {
        nextGrid[i][j] = 1;
      } else if (square === 1 && (neighbour < 2 || neighbour > 3)) {
        nextGrid[i][j] = 0;
      } else {
        nextGrid[i][j] = square;
      }
    }
  }
  return nextGrid;
};

module.exports = { createNewGrid, createGameGrid, evolveGrid };
