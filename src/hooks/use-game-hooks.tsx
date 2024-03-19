import { useState, useCallback, useEffect, useRef } from "react";
import {
  calculateNextGrid,
  initializeGrid,
} from "@/controllers/game-controller";

export function useGameHooks() {
  const [grid, setGrid] = useState(initializeGrid(90, 90));
  const [running, setRunning] = useState(false);
  const [dragging, setDragging] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const runSimulation = useCallback(() => {
    if (!running) return;
    setGrid((currentGrid) => calculateNextGrid(currentGrid));

    timeoutRef.current = setTimeout(runSimulation, 200);
  }, [running]);

  useEffect(() => {
    if (running) {
      runSimulation();
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [running, runSimulation]);

  const toggleCellState = useCallback(
    (rowIndex: number, colIndex: number) => {
      setGrid((currentGrid) => {
        const updatedGrid = [...currentGrid];
        updatedGrid[rowIndex] = [...updatedGrid[rowIndex]];
        updatedGrid[rowIndex][colIndex] = currentGrid[rowIndex][colIndex]
          ? 0
          : 1;
        return updatedGrid;
      });
    },
    [setGrid]
  );

  useEffect(() => {
    setGrid(
      initializeGrid(
        Math.floor(window.innerHeight / 20),
        Math.floor(window.innerWidth / 20)
      )
    );
  }, []);

  useEffect(() => {
    const handleResize = () =>
      setGrid(
        initializeGrid(
          Math.floor(window.innerHeight / 20),
          Math.floor(window.innerWidth / 20)
        )
      );
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { grid, running, setRunning, toggleCellState, dragging, setDragging };
}
