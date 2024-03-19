import React from "react";

interface CellProps {
  isAlive: boolean;
  toggleCell: () => void;
  startDragging: () => void;
  dragging: boolean;
}

function Cell({ isAlive, toggleCell, startDragging, dragging }: CellProps) {
  return (
    <div
      onMouseDown={() => {
        startDragging();
        toggleCell();
      }}
      onMouseEnter={() => {
        if (dragging) {
          toggleCell();
        }
      }}
      onMouseUp={startDragging}
      className={`w-5 h-5 ${
        isAlive ? "bg-yellow-500" : "bg-transparent"
      } border-[0.02rem] border-yellow-50 hover:bg-yellow-300 cursor-pointer transition duration-300`}
    />
  );
}

export default React.memo(Cell);
