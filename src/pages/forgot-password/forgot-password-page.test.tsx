import { render, screen } from "src/test-utils/custom-render";
import ForgotPasswordPage from ".";

vi.mock("src/features/forgot-password", () => ({
  default: () => <div>forgot password view</div>,
}));

describe("<ForgotPasswordPage />", () => {
  it("should render the forgot password view", () => {
    render(<ForgotPasswordPage />);

    const view = screen.getByText(/forgot password view/i);
    expect(view).toBeInTheDocument();
  });
});
