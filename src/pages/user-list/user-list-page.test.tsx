import { render, screen } from "src/test-utils/custom-render";
import UserList from ".";

vi.mock("src/features/user-list", () => ({
  default: () => <div>user list view</div>,
}));

describe("<UserList />", () => {
  it("should render the user list view", () => {
    render(<UserList />);

    const view = screen.getByText(/user list view/i);
    expect(view).toBeInTheDocument();
  });
});
