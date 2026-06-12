import { render, screen } from "src/test-utils/custom-render";
import LoadingScreen from ".";

describe("<LoadingScreen />", () => {
  it("should render correctly", () => {
    render(<LoadingScreen />);

    const loading = screen.getByRole("progressbar");
    expect(loading).toBeInTheDocument();
  });
});
