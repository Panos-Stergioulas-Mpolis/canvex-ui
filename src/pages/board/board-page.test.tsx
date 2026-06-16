import { render, screen } from "src/test-utils/custom-render";
import HomePage from ".";

vi.mock("src/features/home", () => ({
  default: () => <div>home view</div>,
}));

describe("<HomePage />", () => {
  it("should render the home view", () => {
    render(<HomePage />);

    const view = screen.getByText(/home view/i);
    expect(view).toBeInTheDocument();
  });
});
