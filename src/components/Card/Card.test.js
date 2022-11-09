import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Card } from "./Card";

describe("The Card component", () => {
  afterEach(() => {
    cleanup();
  });
  test("should always return true", () => {
    expect(true).toBe(true);
  });
  test("should render value of todo in h1", () => {
    render(<Card todo="currywurst" />);
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toHaveTextContent("currywurst");
  });
  test("should display completed item as strike-through", () => {
    render(<Card todo="Test" completed={true} />);
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toHaveStyle("text-decoration: line-through");
  });
  test("should display red background after clicking 'test'", () => {
    render(<Card todo="Test" completed={true} />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveStyle("background-color: red");
  });
});
