"use client";

import React from "react";
import Cell from "./cell";

interface GridProps {
  grid: number[][];
  toggleCell: (i: number, j: number) => void;
  dragging: boolean;
  setDragging: (value: boolean) => void;
}

function Grid({ grid, toggleCell, dragging, setDragging }: GridProps) {
  const renderCells = () => {
    return grid.flatMap((row, rowIndex) =>
      row.map((cell, colIndex) => (
        <Cell
          key={`${rowIndex}-${colIndex}`}
          isAlive={Boolean(cell)}
          toggleCell={() => toggleCell(rowIndex, colIndex)}
          startDragging={() => setDragging(!dragging)}
          dragging={dragging}
        />
      ))
    );
  };

  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: `repeat(${grid[0].length}, 20px)` }}
    >
      {renderCells()}
    </div>
  );
}

export default React.memo(Grid);
