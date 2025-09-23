import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import {
  MainButton,
  MiniButton,
  ShopNowBannerButton,
  CommunityHomeButton,
  LearnMoreButton,
} from ".";

describe("1 - MainButton", () => {
  it("1.1 - should render with default styles", () => {
    render(<MainButton>Test</MainButton>);
    const button = screen.getByText("Test");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyleRule("background", "#032700", {
      modifier: ":hover",
    });
    expect(button).toHaveStyleRule("border", "1px solid #74a795", {
      modifier: ":hover",
    });
  });

  it("1.2 - should render with selected styles", () => {
    render(<MainButton className="selected">Test</MainButton>);
    const button = screen.getByText("Test");
    expect(button).toHaveStyle({
      background: "#222e21",
      border: "2px solid #74a795",
      color: "#fafafa",
    });
  });

  it("1.3 - should render with sold-out styles", () => {
    render(<MainButton className="sold-out">Test</MainButton>);
    const button = screen.getByText("Test");
    expect(button).toHaveStyle({
      border: "none",
      background: "#969696",
      color: "#fafafa",
    });
  });
});

describe("2 - MiniButton", () => {
  it("2.1 - should render with default styles", () => {
    render(<MiniButton>Test</MiniButton>);
    const button = screen.getByText("Test");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      padding: "8px",
    });
  });

  it("2.2 - should render with selected styles", () => {
    render(<MiniButton className="selected">Test</MiniButton>);
    const button = screen.getByText("Test");
    expect(button).toHaveStyle({
      background: "#222e21",
      border: "2px solid #74a795",
      color: "#fafafa",
    });
  });
});

describe("3 - ShopNowBannerButton", () => {
  it("3.1 - should render with default styles", () => {
    render(<ShopNowBannerButton>Test</ShopNowBannerButton>);
    const button = screen.getByText("Test");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      color: "#fafafa",
      "border-color": "#fafafa",
      background: "#03270080",
    });
    expect(button).toHaveStyleRule("background", "#03270080", {
      modifier: ":hover",
    });
  });

  it("3.2 - should render with selected styles", () => {
    render(
      <ShopNowBannerButton className="selected">Test</ShopNowBannerButton>
    );
    const button = screen.getByText("Test");
    expect(button).toHaveStyle({
      background: "#222e21",
      border: "2px solid #74a795",
      color: "#fafafa",
    });
  });
});

describe("4 - CommunityHomeButton", () => {
  it("4.1 - should render with default styles", () => {
    render(<CommunityHomeButton>Test</CommunityHomeButton>);
    const button = screen.getByText("Test");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      padding: "8px",
      "font-weight": "400",
    });
  });

  it("4.2 - should render with selected styles", () => {
    render(
      <CommunityHomeButton className="selected">Test</CommunityHomeButton>
    );
    const button = screen.getByText("Test");
    expect(button).toHaveStyle({
      background: "#222e21",
      border: "2px solid #74a795",
      color: "#fafafa",
    });
  });
});

describe("5 - LearnMoreButton", () => {
  it("5.1 - should render with default styles", () => {
    render(<LearnMoreButton>Test</LearnMoreButton>);
    const button = screen.getByText("Test");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      "border-color": "#FAFAFA",
      color: "#fafafa",
      background: "#adc3b2",
    });
  });

  it("5.2 - should render with selected styles", () => {
    render(<LearnMoreButton className="selected">Test</LearnMoreButton>);
    const button = screen.getByText("Test");
    expect(button).toHaveStyle({
      background: "#222e21",
      border: "2px solid #74a795",
      color: "#fafafa",
    });
  });
});
