import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./index";
import "@testing-library/jest-dom";
import IButtonProps from "./button.type";


jest.mock("./styles", () => ({
  StyledButton: ({ children, variant, ...props }: IButtonProps) => (
    <button data-variant={variant} {...props}>
      {children}
    </button>
  ),
}));

describe("Button Component", () => {
  it("renders correctly with given text", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("applies the correct variant", () => {
    render(<Button variant="primary">Test Button</Button>);
    const button = screen.getByText("Test Button");
    expect(button).toHaveAttribute("data-variant", "primary");
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
