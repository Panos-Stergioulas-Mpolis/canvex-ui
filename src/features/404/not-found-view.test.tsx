import { render, screen } from "src/test-utils/custom-render";
import NotFoundView from ".";

describe("<NotFoundView />", () => {
  it("should render correctly", () => {
    render(<NotFoundView />);

    const view = screen.getByText(/404/i);
    expect(view).toBeInTheDocument();
  });
});
