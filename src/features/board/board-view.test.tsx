import { render, screen } from "src/test-utils/custom-render";
import BoardView from ".";

describe("<BoardView />", () => {
  it("should render correctly", () => {
    render(<BoardView />);

    const view = screen.getByText(/board/i);
    expect(view).toBeInTheDocument();
  });
});
