import { render, screen } from "src/test-utils/custom-render";
import UserRole from ".";

vi.mock("src/features/user-role", () => ({
  default: () => <div>user role view</div>,
}));

describe("<UserRole />", () => {
  it("should render the user role view", () => {
    render(<UserRole />);

    const view = screen.getByText(/user role view/i);
    expect(view).toBeInTheDocument();
  });
});
