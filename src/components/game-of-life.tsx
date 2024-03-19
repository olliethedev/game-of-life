"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useGameHooks } from "@/hooks/use-game-hooks";

const Grid = React.lazy(() => import("./grid"));

function GameOfLife() {
  const { grid, running, setRunning, toggleCellState, dragging, setDragging } =
    useGameHooks();
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  return (
    <>
      <button
        className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition duration-300"
        onClick={() => setRunning(!running)}
      >
        {running ? "Stop" : "Start"}
      </button>
      {isPageLoaded && (
        <Suspense fallback={<div>Loading grid...</div>}>
          <Grid
            grid={grid}
            toggleCell={toggleCellState}
            dragging={dragging}
            setDragging={setDragging}
          />
        </Suspense>
      )}
    </>
  );
}

export default GameOfLife;
