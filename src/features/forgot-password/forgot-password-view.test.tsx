import { render, screen } from "src/test-utils/custom-render";
import ForgotPasswordView from ".";

describe("<ForgotPasswordView />", () => {
  it("should render correctly", () => {
    render(<ForgotPasswordView />);

    const view = screen.getByText(/forgot password/i);
    expect(view).toBeInTheDocument();
  });
});
