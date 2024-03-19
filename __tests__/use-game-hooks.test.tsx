import { renderHook, act, waitFor } from "@testing-library/react";
import { useGameHooks } from "../src/hooks/use-game-hooks";
import { initializeGrid } from "@/controllers/game-controller";

describe("useGameHooks", () => {
  test("initializes with the correct default state", () => {
    const { result } = renderHook(() => useGameHooks());

    expect(result.current.grid.length).toBe(
      Math.floor(window.innerHeight / 20)
    );

    expect(result.current.grid[0].length).toBe(
      Math.floor(window.innerWidth / 20)
    );

    expect(result.current.running).toBe(false);

    expect(result.current.dragging).toBe(false);
  });

  test("toggles the running state", () => {
    const { result } = renderHook(() => useGameHooks());

    act(() => {
      result.current.setRunning(true);
    });

    expect(result.current.running).toBe(true);

    act(() => {
      result.current.setRunning(false);
    });

    expect(result.current.running).toBe(false);
  });

  test("updates the grid when toggling a cell state", () => {
    const { result } = renderHook(() => useGameHooks());

    act(() => {
      result.current.toggleCellState(0, 0);
    });

    expect(result.current.grid[0][0]).toBe(1);

    act(() => {
      result.current.toggleCellState(0, 0);
    });

    expect(result.current.grid[0][0]).toBe(0);
  });

  test("updates the grid on simulation run", async () => {
    const { result } = renderHook(() => useGameHooks());

    act(() => {
      result.current.setRunning(true);
    });

    await waitFor(() =>
      expect(result.current.grid).not.toEqual(initializeGrid(90, 90))
    );
  });

  test("updates the grid size on window resize", () => {
    const { result } = renderHook(() => useGameHooks());

    act(() => {
      window.innerWidth = 800;
      window.innerHeight = 600;
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current.grid.length).toBe(
      Math.floor(window.innerHeight / 20)
    );
    expect(result.current.grid[0].length).toBe(
      Math.floor(window.innerWidth / 20)
    );
  });

  test("cleans up the running simulation on unmount", () => {
    const { result, unmount } = renderHook(() => useGameHooks());

    act(() => {
      result.current.setRunning(true);
    });

    unmount();
  });
});
