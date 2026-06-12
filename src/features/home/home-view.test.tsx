import { render, screen } from "src/test-utils/custom-render";
import HomeView from ".";

describe("<HomeView />", () => {
  it("should render correctly", () => {
    render(<HomeView />);

    const view = screen.getByText(/home/i);
    expect(view).toBeInTheDocument();
  });
});
