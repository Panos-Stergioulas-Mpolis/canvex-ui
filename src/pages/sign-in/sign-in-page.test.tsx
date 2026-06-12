import { render, screen } from "src/test-utils/custom-render";
import SignInPage from ".";

vi.mock("src/features/sign-in", () => ({
  default: () => <div>sign in view</div>,
}));

describe("<SignInPage />", () => {
  it("should render the sign in view", () => {
    render(<SignInPage />);

    const view = screen.getByText(/sign in view/i);
    expect(view).toBeInTheDocument();
  });
});
