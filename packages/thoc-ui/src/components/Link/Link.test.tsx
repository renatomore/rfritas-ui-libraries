import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Link } from ".";

describe("1 - <Link>", () => {
  it("1.1 - should render with default styles", () => {
    render(<Link>Default Link</Link>);
    const linkElement = screen.getByText("Default Link");
    expect(linkElement).toHaveStyleRule("cursor", "pointer");
    expect(linkElement).toHaveStyleRule("font-weight", "600");
    expect(linkElement).toHaveStyleRule("color", "#032700");
    expect(linkElement).toHaveStyleRule("text-decoration", "none");
  });

  it("1.2 - should render with small size when size prop is 'S'", () => {
    render(<Link size="S">Small Link</Link>);
    const linkElement = screen.getByText("Small Link");
    expect(linkElement).toHaveStyleRule("font-size", "13px");
  });

  it("1.3 - should render with medium size when size prop is 'M'", () => {
    render(<Link size="M">Medium Link</Link>);
    const linkElement = screen.getByText("Medium Link");
    expect(linkElement).toHaveStyleRule("font-size", "24px");
  });

  it("1.4 - should render with medium size when size prop is not provided", () => {
    render(<Link>Default Size Link</Link>);
    const linkElement = screen.getByText("Default Size Link");
    expect(linkElement).toHaveStyleRule("font-size", "24px");
  });

  it("1.5 - should change color on hover", () => {
    render(<Link>Hover Link</Link>);
    const linkElement = screen.getByText("Hover Link");
    expect(linkElement).toHaveStyleRule("color", "#74a795", {
      modifier: ":hover",
    });
  });
});
