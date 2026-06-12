import { render, screen } from "src/test-utils/custom-render";
import SignUpView from ".";

describe("<SignUpView />", () => {
  it("should render correctly", () => {
    render(<SignUpView />);

    const view = screen.getByText(/sign up/i);
    expect(view).toBeInTheDocument();
  });
});
