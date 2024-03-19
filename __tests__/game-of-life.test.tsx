import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import GameOfLife from "../src/components/game-of-life";

describe("Game of Life", () => {
  test("renders Game of Life component with initial grid", async () => {
    render(<GameOfLife />);
    const gridElement = await screen.findByTestId("grid");
    expect(gridElement).toBeInTheDocument();
    const initialCell = await screen.findByTestId("cell-0-0");
    expect(initialCell).toHaveClass("bg-transparent");
  });

  test("allows user to toggle cells on mouse enter while dragging", async () => {
    render(<GameOfLife />);
    const cell = await screen.findByTestId("cell-0-0");
    const anotherCell = await screen.findByTestId("cell-0-1");

    fireEvent.mouseDown(cell);
    fireEvent.mouseEnter(anotherCell);
    fireEvent.mouseUp(cell);

    await waitFor(() => {
      expect(anotherCell).toHaveClass("bg-yellow-500");
    });
  });

  test("updates grid state over time", () => {
    jest.useFakeTimers();
    render(<GameOfLife />);
    jest.advanceTimersByTime(200);
    jest.useRealTimers();
  });
  
  test("toggles running state when start/stop button is clicked", async () => {
    render(<GameOfLife />);
    const startStopButton = screen.getByTestId("start-stop-button");
    expect(startStopButton).toHaveTextContent("Start");
    fireEvent.click(startStopButton);
    expect(startStopButton).toHaveTextContent("Stop");
    fireEvent.click(startStopButton);
    expect(startStopButton).toHaveTextContent("Start");
  });
});
