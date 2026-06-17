import { render, screen } from "src/test-utils/custom-render";
import UserRoleView from ".";

describe("<UserRoleView />", () => {
  it("should render correctly", () => {
    render(<UserRoleView />);

    const text = screen.getByText(/user role/i);
    expect(text).toBeInTheDocument();
  });
});
