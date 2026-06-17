import { render, screen } from "src/test-utils/custom-render";
import BoardPage from ".";

vi.mock("src/features/board", () => ({
  default: () => <div>board view</div>,
}));

describe("<BoardPage />", () => {
  it("should render the board view", () => {
    render(<BoardPage />);

    const view = screen.getByText(/board view/i);
    expect(view).toBeInTheDocument();
  });
});
