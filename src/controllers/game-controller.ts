export function calculateNextGrid(currentGrid: number[][]): number[][] {
  const numRows = currentGrid.length;
  const numCols = currentGrid[0].length;
  const nextGrid = initializeGrid(numRows, numCols);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const cell = currentGrid[i][j];
      const neighbors = countNeighbors(currentGrid, i, j, numRows, numCols);

      nextGrid[i][j] = determineNextCellState(cell, neighbors);
    }
  }

  return nextGrid;
};

export function initializeGrid(numRows: number, numCols: number): number[][] {
  return new Array(numRows).fill(null).map(() => new Array(numCols).fill(0));
};

function countNeighbors(grid: number[][], x: number, y: number, numRows: number, numCols: number): number {
  let neighbors = 0;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;
      const xi = x + i;
      const yj = y + j;

      if (xi >= 0 && xi < numRows && yj >= 0 && yj < numCols) {
        neighbors += grid[xi][yj];
      }
    }
  }

  return neighbors;
};

function determineNextCellState(cell: number, neighbors: number): number {
  if (cell === 1 && (neighbors < 2 || neighbors > 3)) {
    return 0;
  } else if (cell === 0 && neighbors === 3) {
    return 1;
  } else {
    return cell;
  }
};

