import { render, screen } from "src/test-utils/custom-render";
import AccessDeniedPage from ".";

vi.mock("src/features/403", () => ({
  default: () => <div>403 view</div>,
}));

describe("<AccessDeniedPage />", () => {
  it("should render the 403 view", () => {
    render(<AccessDeniedPage />);

    const view = screen.getByText(/403 view/i);
    expect(view).toBeInTheDocument();
  });
});
