const {
  createGameGrid,
  createNewGrid,
  evolveGrid
} = require("../utility/gameLogic");

describe("createGameGrid", () => {
  it("creates a game grid of size 3 and 5 respectively with correct values", () => {
    const testGrid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    const testGridTwo = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];
    expect(createGameGrid(3, 3)).toEqual(testGrid);
    expect(createGameGrid(5, 5)).toEqual(testGridTwo);
  });
  it("creates a grid of any size and sets correct values", () => {
    const testGrid = createGameGrid(50, 50);
    let numberOfSquares = 0;
    testGrid.forEach(y => {
      y.forEach(x => {
        numberOfSquares++;
      });
    });

    const testValues = testGrid.filter(y => {
      return y.filter(x => {
        if (x === 0) return x;
      });
    });

    let valueChecked = 0;
    testValues.forEach(y => {
      y.forEach(x => {
        valueChecked++;
      });
    });

    expect(createGameGrid(0, 0)).toHaveLength(0);
    expect(createGameGrid(25, 25)).toHaveLength(25);
    expect(createGameGrid(50, 50)).toHaveLength(50);
    expect(numberOfSquares).toBe(2500);
    expect(valueChecked).toBe(2500);
  });
});

describe("createNewGrid", () => {
  it("creates a new grid with no values", () => {
    const testGridOne = createNewGrid(3);
    const testArrOne = [
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined]
    ];
    const testGridTwo = createNewGrid(25);
    const testValues = testGridTwo.filter(x => {
      return x.filter(y => {
        if (y === undefined) return y;
      });
    });

    const testGridThree = createNewGrid(50);
    const testValuesTwo = testGridThree.filter(x => {
      return x.filter(y => {
        if (y === undefined) return y;
      });
    });
    expect(testGridOne).toEqual(testArrOne);
    expect(testValues).toHaveLength(25);
    expect(testValuesTwo).toHaveLength(50);
  });
});

describe("evolveGrid", () => {
  it("When there are no live cells then on the next generation there are still no live cells", () => {
    const testGameGrid = createGameGrid(5, 5);
    const testNextGrid = createNewGrid(5);
    const testGridGeneration = evolveGrid(testGameGrid, testNextGrid, 5);
    expect(testGridGeneration).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]);
  });
  it("When a given cell has fewer than two neighbours this cell dies", () => {
    const testGameGrid = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];
    const underpopulationRule = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];
    const testNextGrid = createNewGrid(5);
    const testGridGeneration = evolveGrid(testGameGrid, testNextGrid, 5);
    expect(testGridGeneration).toEqual(underpopulationRule);
  });
  it("when a cell has more than three neighbours this cell dies", () => {
    const testGameGrid = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0]
    ];
    const overPopulationRule = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0]
    ];
    const testNextGrid = createNewGrid(5);
    const testGridGeneration = evolveGrid(testGameGrid, testNextGrid, 5);
    expect(testGridGeneration).toEqual(overPopulationRule);
  });
  it("when a live cell has two or three neighbours then this cell stays alive", () => {
    const testGameGrid = [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];
    const survivalOne = [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];

    const testGameGridTwo = [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];
    const survivalTwo = [
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];
    const testNextGrid = createNewGrid(5);
    const testNextGridTwo = createNewGrid(5);
    const testGridGeneration = evolveGrid(testGameGrid, testNextGrid, 5);
    const testGridGenerationTwo = evolveGrid(
      testGameGridTwo,
      testNextGridTwo,
      5
    );
    expect(testGridGeneration).toEqual(survivalOne);
    expect(testGridGenerationTwo).toEqual(survivalTwo);
  });
  it("When an empty position has exactly three neighbouring cells then a cell is created in that position", () => {
    const testGameGrid = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0]
    ];
    const creation = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];
    const testNextGrid = createNewGrid(5);
    const testGridGeneration = evolveGrid(testGameGrid, testNextGrid, 5);
    expect(testGridGeneration).toEqual(creation);
  });
  it("When at any side of the grid the next generation wraps", () => {
    const testGameGrid = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1]
    ];
    const wrapGrid = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 1, 1],
      [0, 0, 0, 0, 0]
    ];
    const testGameGridTwo = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1]
    ];
    const wrapGridTwo = [
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 1, 0]
    ];
    const testNextGrid = createNewGrid(5);
    const testNextGridTwo = createNewGrid(5);

    const testGridGeneration = evolveGrid(testGameGrid, testNextGrid, 5);
    const testGridGenerationTwo = evolveGrid(
      testGameGridTwo,
      testNextGridTwo,
      5
    );

    expect(testGridGeneration).toEqual(wrapGrid);
    expect(testGridGenerationTwo).toEqual(wrapGridTwo);
  });
});
