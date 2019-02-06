import grid from "../src/Components/Board";

test("creates grid", () => {
  const testGrid = grid(3, 3);
  expect(testGrid).toBe([[], [], []], [[], [], []], [[], [], []]);
});
