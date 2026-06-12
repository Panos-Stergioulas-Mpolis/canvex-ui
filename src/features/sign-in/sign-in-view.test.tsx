import { render, screen } from "src/test-utils/custom-render";
import SignInView from ".";

describe("<SignInView />", () => {
  it("should render correctly", () => {
    render(<SignInView />);

    const view = screen.getByText(/sign in/i);
    expect(view).toBeInTheDocument();
  });
});
