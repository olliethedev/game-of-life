import { calculateNextGrid, initializeGrid } from '../src/controllers/game-controller';

describe('Game of Life', () => {
  describe('initializeGrid', () => {
    test('should initialize a grid of the correct size with all cells dead', () => {
      const numRows = 3;
      const numCols = 3;
      const expectedGrid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const grid = initializeGrid(numRows, numCols);
      expect(grid).toEqual(expectedGrid);
    });
  });

  describe('calculateNextGrid', () => {
    test('should correctly calculate the next grid state', () => {
      const currentGrid = [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ];
      const expectedNextGrid = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ];
      const nextGrid = calculateNextGrid(currentGrid);
      expect(nextGrid).toEqual(expectedNextGrid);
    });

    test('should kill cells with fewer than two live neighbors (underpopulation)', () => {
      const currentGrid = [
        [0, 0, 0],
        [1, 1, 0],
        [0, 0, 0],
      ];
      const expectedNextGrid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const nextGrid = calculateNextGrid(currentGrid);
      expect(nextGrid).toEqual(expectedNextGrid);
    });

    test('should bring dead cells to life with exactly three live neighbors (reproduction)', () => {
      const currentGrid = [
        [1, 0, 1],
        [0, 0, 0],
        [0, 1, 0],
      ];
      const expectedNextGrid = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ];
      const nextGrid = calculateNextGrid(currentGrid);
      expect(nextGrid).toEqual(expectedNextGrid);
    });
  });
});
