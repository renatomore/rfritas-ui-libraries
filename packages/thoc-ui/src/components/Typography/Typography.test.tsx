import { render } from "@testing-library/react";
import "jest-styled-components";
import { BannerText, DisplayLarge, Title, Heading, PriceText, Text } from ".";

describe("1 - <BannerText>", () => {
  it("1.1 - should render with the correct styles", () => {
    const { getByText } = render(<BannerText>Banner</BannerText>);
    const bannerText = getByText("Banner");
    expect(bannerText).toHaveStyleRule("font-weight", "700");
    expect(bannerText).toHaveStyleRule("font-size", "48px");
    expect(bannerText).toHaveStyleRule("color", "#fafafa");
    expect(bannerText).toHaveStyleRule("-webkit-text-stroke-width", "1px");
    expect(bannerText).toHaveStyleRule(
      "-webkit-text-stroke-color",
      "#03270080"
    );
  });
});

describe("2 - <DisplayLarge>", () => {
  it("2.1 - should render with default color when color prop is not provided", () => {
    const { getByText } = render(<DisplayLarge>Display</DisplayLarge>);
    const displayLarge = getByText("Display");
    expect(displayLarge).toHaveStyleRule("color", "#032700");
    expect(displayLarge).toHaveStyleRule("font-weight", "700");
    expect(displayLarge).toHaveStyleRule("font-size", "48px");
  });

  it("2.2 - should render with the provided color", () => {
    const { getByText } = render(
      <DisplayLarge color="#ff0000">Display</DisplayLarge>
    );
    const displayLarge = getByText("Display");
    expect(displayLarge).toHaveStyleRule("color", "#ff0000");
  });
});

describe("3 - <Title>", () => {
  it("3.1 - should render as an h1 element", () => {
    const { getByText } = render(<Title>Title</Title>);
    const title = getByText("Title");
    expect(title.tagName).toBe("H1");
  });

  it("3.2 - should render with default color when color prop is not provided", () => {
    const { getByText } = render(<Title>Title</Title>);
    const title = getByText("Title");
    expect(title).toHaveStyleRule("color", "#032700");
    expect(title).toHaveStyleRule("font-weight", "600");
    expect(title).toHaveStyleRule("font-size", "18px");
  });

  it("3.3 - should render with the provided color", () => {
    const { getByText } = render(<Title color="#ff0000">Title</Title>);
    const title = getByText("Title");
    expect(title).toHaveStyleRule("color", "#ff0000");
  });
});

describe("4 - <Heading>", () => {
  it("4.1 - should render with default color and size M when no props are provided", () => {
    const { getByText } = render(<Heading>Heading</Heading>);
    const heading = getByText("Heading");
    expect(heading).toHaveStyleRule("color", "#032700");
    expect(heading).toHaveStyleRule("font-weight", "700");
    expect(heading).toHaveStyleRule("font-size", "20px");
  });

  it("4.2 - should render with the provided color", () => {
    const { getByText } = render(<Heading color="#ff0000">Heading</Heading>);
    const heading = getByText("Heading");
    expect(heading).toHaveStyleRule("color", "#ff0000");
  });

  it("4.3 - should render with size L styles when size='L' is provided", () => {
    const { getByText } = render(<Heading size="L">Heading</Heading>);
    const heading = getByText("Heading");
    expect(heading).toHaveStyleRule("font-size", "26px");
  });
});

describe("5 - <PriceText>", () => {
  it("5.1 - should render with default color and size S when no props are provided", () => {
    const { getByText } = render(<PriceText>Price</PriceText>);
    const priceText = getByText("Price");
    expect(priceText).toHaveStyleRule("color", "#032700");
    expect(priceText).toHaveStyleRule("font-weight", "700");
    expect(priceText).toHaveStyleRule("font-size", "14px");
  });

  it("5.2 - should render with the provided color", () => {
    const { getByText } = render(<PriceText color="#ff0000">Price</PriceText>);
    const priceText = getByText("Price");
    expect(priceText).toHaveStyleRule("color", "#ff0000");
  });

  it("5.3 - should render with size L styles when size='L' is provided", () => {
    const { getByText } = render(<PriceText size="L">Price</PriceText>);
    const priceText = getByText("Price");
    expect(priceText).toHaveStyleRule("font-size", "20px");
  });
});

describe("6 - <Text>", () => {
  it("6.1 - should render with default color and size M when no props are provided", () => {
    const { getByText } = render(<Text>Text</Text>);
    const text = getByText("Text");
    expect(text).toHaveStyleRule("color", "#032700");
    expect(text).toHaveStyleRule("font-weight", "600");
    expect(text).toHaveStyleRule("font-size", "14px");
  });

  it("6.2 - should render with the provided color", () => {
    const { getByText } = render(<Text color="#ff0000">Text</Text>);
    const text = getByText("Text");
    expect(text).toHaveStyleRule("color", "#ff0000");
  });

  it("6.3 - should render with size S styles when size='S' is provided", () => {
    const { getByText } = render(<Text size="S">Text</Text>);
    const text = getByText("Text");
    expect(text).toHaveStyleRule("font-weight", "400");
    expect(text).toHaveStyleRule("font-size", "13px");
  });

  it("6.4 - should render with size L styles when size='L' is provided", () => {
    const { getByText } = render(<Text size="L">Text</Text>);
    const text = getByText("Text");
    expect(text).toHaveStyleRule("font-weight", "600");
    expect(text).toHaveStyleRule("font-size", "24px");
  });
});
