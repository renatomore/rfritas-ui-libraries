import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Input } from ".";

describe("1 - Input", () => {
  it("1.1 - should render correctly", () => {
    render(<Input data-testid="input" />);
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });

  it("1.2 - should have the correct styles", () => {
    render(<Input data-testid="input" />);
    const inputElement = screen.getByTestId("input");

    expect(inputElement).toHaveStyleRule("font-family", '"Amiko"');
    expect(inputElement).toHaveStyleRule("color", "#92a093");
    expect(inputElement).toHaveStyleRule("font-size", "16px");
    expect(inputElement).toHaveStyleRule("font-weight", "600");
    expect(inputElement).toHaveStyleRule("padding-top", "25px");
    expect(inputElement).toHaveStyleRule("padding-bottom", "22px");
    expect(inputElement).toHaveStyleRule("padding-left", "12px");
    expect(inputElement).toHaveStyleRule("border-radius", "8px");
    expect(inputElement).toHaveStyleRule("border", "1px solid #032700");
  });
});
