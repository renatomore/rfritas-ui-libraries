import { render, screen } from "@testing-library/react";
import { Icon, SocialIcon, RatingStar } from ".";

jest.mock("../../assets/SocialIcons", () => ({
  Youtube: (props: any) => <svg data-testid="Youtube" {...props} />,
  Instagram: (props: any) => <svg data-testid="Instagram" {...props} />,
  X: (props: any) => <svg data-testid="X" {...props} />,
  Facebook: (props: any) => <svg data-testid="Facebook" {...props} />,
}));

jest.mock("../../assets/Icons", () => ({
  Bars: (props: any) => <svg data-testid="Bars" {...props} />,
  Bell: (props: any) => <svg data-testid="Bell" {...props} />,
  Bookmark: (props: any) => <svg data-testid="Bookmark" {...props} />,
  Close: (props: any) => <svg data-testid="Close" {...props} />,
  Exit: (props: any) => <svg data-testid="Exit" {...props} />,
  Heart: (props: any) => <svg data-testid="Heart" {...props} />,
  Image: (props: any) => <svg data-testid="Image" {...props} />,
  Money: (props: any) => <svg data-testid="Money" {...props} />,
  Pause: (props: any) => <svg data-testid="Pause" {...props} />,
  Pencil: (props: any) => <svg data-testid="Pencil" {...props} />,
  PlayPause: (props: any) => <svg data-testid="PlayPause" {...props} />,
  Play: (props: any) => <svg data-testid="Play" {...props} />,
  Plus: (props: any) => <svg data-testid="Plus" {...props} />,
  Search: (props: any) => <svg data-testid="Search" {...props} />,
  ShoppingCart: (props: any) => <svg data-testid="ShoppingCart" {...props} />,
  ShoppingCartPlus: (props: any) => (
    <svg data-testid="ShoppingCartPlus" {...props} />
  ),
  StarNegative: (props: any) => <svg data-testid="StarNegative" {...props} />,
  StarPositive: (props: any) => <svg data-testid="StarPositive" {...props} />,
}));

const iconNames = [
  "Bars",
  "Bell",
  "Bookmark",
  "Close",
  "Exit",
  "Heart",
  "Image",
  "Money",
  "Pause",
  "Pencil",
  "PlayPause",
  "Play",
  "Plus",
  "Search",
  "ShoppingCart",
  "ShoppingCartPlus",
] as const;

const socialIconNames = ["Facebook", "Instagram", "X", "Youtube"] as const;

describe("1 - <Icon>", () => {
  iconNames.forEach((iconName, index) => {
    it(`1.${index + 1} - should render the ${iconName} icon`, () => {
      render(<Icon icon={iconName} />);
      expect(screen.getByTestId(iconName)).toBeInTheDocument();
    });
  });

  it("1.17 - should apply all props correctly", () => {
    render(
      <Icon
        icon="Bars"
        className="test-class"
        backgroundColor="red"
        color="blue"
        width="50px"
        height="50px"
      />
    );
    const icon = screen.getByTestId("Bars");
    expect(icon).toHaveClass("test-class");
    expect(icon).toHaveAttribute("backgroundColor", "red");
    expect(icon).toHaveAttribute("color", "blue");
    expect(icon).toHaveAttribute("width", "50px");
    expect(icon).toHaveAttribute("height", "50px");
  });

  it("1.18 - should apply default color when color prop is not provided", () => {
    render(<Icon icon="Bell" />);
    const icon = screen.getByTestId("Bell");
    expect(icon).toHaveAttribute("color", "#032700");
  });
});

describe("2 - <SocialIcon>", () => {
  socialIconNames.forEach((iconName, index) => {
    it(`2.${index + 1} - should render the ${iconName} icon`, () => {
      render(<SocialIcon icon={iconName} />);
      expect(screen.getByTestId(iconName)).toBeInTheDocument();
    });
  });

  it("2.5 - should apply all props correctly", () => {
    render(
      <SocialIcon
        icon="Facebook"
        className="test-class"
        backgroundColor="blue"
        color="white"
        width="24px"
        height="24px"
      />
    );
    const icon = screen.getByTestId("Facebook");
    expect(icon).toHaveClass("test-class");
    expect(icon).toHaveAttribute("backgroundColor", "blue");
    expect(icon).toHaveAttribute("color", "white");
    expect(icon).toHaveAttribute("width", "24px");
    expect(icon).toHaveAttribute("height", "24px");
  });
});

describe("3 - <RatingStar>", () => {
  it("3.1 - should render StarPositive when positive is true", () => {
    render(<RatingStar positive />);
    expect(screen.getByTestId("StarPositive")).toBeInTheDocument();
    expect(screen.queryByTestId("StarNegative")).not.toBeInTheDocument();
  });

  it("3.2 - should render StarNegative when positive is false", () => {
    render(<RatingStar positive={false} />);
    expect(screen.getByTestId("StarNegative")).toBeInTheDocument();
    expect(screen.queryByTestId("StarPositive")).not.toBeInTheDocument();
  });

  it("3.3 - should render StarNegative when positive is not provided", () => {
    render(<RatingStar />);
    expect(screen.getByTestId("StarNegative")).toBeInTheDocument();
    expect(screen.queryByTestId("StarPositive")).not.toBeInTheDocument();
  });

  it("3.4 - should apply small size correctly", () => {
    render(<RatingStar size="S" />);
    expect(screen.getByTestId("StarNegative")).toHaveAttribute("width", "18px");
  });

  it("3.5 - should apply medium size correctly", () => {
    render(<RatingStar size="M" />);
    expect(screen.getByTestId("StarNegative")).toHaveAttribute("width", "26px");
  });

  it("3.6 - should apply large size correctly", () => {
    render(<RatingStar size="L" />);
    expect(screen.getByTestId("StarNegative")).toHaveAttribute("width", "36px");
  });

  it("3.7 - should default to medium size when size is not provided", () => {
    render(<RatingStar />);
    expect(screen.getByTestId("StarNegative")).toHaveAttribute("width", "26px");
  });

  it("3.8 - should apply className correctly", () => {
    render(<RatingStar className="test-class" />);
    expect(screen.getByTestId("StarNegative")).toHaveClass("test-class");
  });
});
