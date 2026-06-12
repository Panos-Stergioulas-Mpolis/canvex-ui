import { render, screen } from "src/test-utils/custom-render";
import SignUpPage from ".";

vi.mock("src/features/sign-up", () => ({
  default: () => <div>sign-up view</div>,
}));

describe("<SignUpPage />", () => {
  it("should render the sign-up view", () => {
    render(<SignUpPage />);

    const view = screen.getByText(/sign-up view/i);
    expect(view).toBeInTheDocument();
  });
});
