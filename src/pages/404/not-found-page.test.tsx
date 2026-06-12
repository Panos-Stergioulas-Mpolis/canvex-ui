import { render, screen } from "src/test-utils/custom-render";
import NotFoundPage from ".";

vi.mock("src/features/404", () => ({
  default: () => <div>404 view</div>,
}));

describe("<NotFoundPage />", () => {
  it("should render the 404 view", () => {
    render(<NotFoundPage />);

    const view = screen.getByText(/404 view/i);
    expect(view).toBeInTheDocument();
  });
});
