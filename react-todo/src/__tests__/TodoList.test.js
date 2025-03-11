import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders todo list with initial items", () => {
  render(<TodoList />);
  
  // Check if the heading is there
  expect(screen.getByText(/todo list/i)).toBeInTheDocument();
});
