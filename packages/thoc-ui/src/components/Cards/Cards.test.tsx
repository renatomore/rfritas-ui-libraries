import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { ShopNowCard, HomeCommunityCards, HoverCard } from ".";

const mockProps = {
  shopNowCard: {
    backgroundImage: "background.jpg",
    hoverBackgroundImage: "hover-background.jpg",
    contentText: "Shop Now Content",
  },
  hoverCard: {
    backgroundImage: "background.jpg",
    contentText: "Hover Card Content",
  },
  homeCommunityCards: {
    backgroundImage: "community-background.jpg",
  },
};

describe("1 - ShopNowCard", () => {
  it("1.1 - should render correctly with default props", () => {
    render(
      <ShopNowCard
        backgroundImage={mockProps.shopNowCard.backgroundImage}
        contentText={mockProps.shopNowCard.contentText}
      />
    );
    expect(
      screen.getByText(mockProps.shopNowCard.contentText)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /shop now/i })
    ).toBeInTheDocument();
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", mockProps.shopNowCard.backgroundImage);
  });

  it("1.2 - should render correctly with small prop", () => {
    const { container } = render(
      <ShopNowCard
        backgroundImage={mockProps.shopNowCard.backgroundImage}
        contentText={mockProps.shopNowCard.contentText}
        small
      />
    );
    expect(screen.getByTestId("card-text")).toHaveStyleRule(
      "font-size",
      "20px"
    );
  });

  it("1.3 - should apply hover background image when provided and not render img tag", () => {
    const { container } = render(<ShopNowCard {...mockProps.shopNowCard} />);
    expect(container.firstChild).toHaveStyleRule(
      "background-image",
      `url(${mockProps.shopNowCard.hoverBackgroundImage})`,
      {
        modifier: ":hover",
      }
    );
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});

describe("2 - HoverCard", () => {
  it("2.1 - should render correctly with default props", () => {
    render(<HoverCard {...mockProps.hoverCard} />);
    expect(
      screen.getByText(mockProps.hoverCard.contentText)
    ).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      mockProps.hoverCard.backgroundImage
    );
  });

  it("2.2 - should render correctly with large prop", () => {
    render(<HoverCard {...mockProps.hoverCard} large />);
    expect(screen.getByText(mockProps.hoverCard.contentText)).toHaveStyleRule(
      "font-size",
      "48px"
    );
  });
});

describe("3 - HomeCommunityCards", () => {
  it("3.1 - should render with the correct background image", () => {
    const { container } = render(
      <HomeCommunityCards
        $backgroundImage={mockProps.homeCommunityCards.backgroundImage}
      />
    );
    expect(container.firstChild).toHaveStyleRule(
      "background",
      `url(${mockProps.homeCommunityCards.backgroundImage}) no-repeat center/cover black`
    );
  });
});
