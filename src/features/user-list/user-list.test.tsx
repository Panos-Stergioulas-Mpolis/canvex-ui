import { render, screen } from "src/test-utils/custom-render";
import UserLisView from ".";

describe("<UserLisView />", () => {
  it("should render correctly", () => {
    render(<UserLisView />);

    const text = screen.getByText(/user list/i);
    expect(text).toBeInTheDocument();
  });
});
