import { render, screen } from "src/test-utils/custom-render";
import AccessDeniedView from ".";

describe("<AccessDeniedView />", () => {
  it("should render correctly", () => {
    render(<AccessDeniedView />);

    const view = screen.getByText(/403/i);
    expect(view).toBeInTheDocument();
  });
});
