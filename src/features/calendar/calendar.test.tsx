import { render, screen } from "src/test-utils/custom-render";
import CalendarView from ".";

describe("<CalendarView />", () => {
  it("should render correctly", () => {
    render(<CalendarView />);

    const today = screen.getByRole("button", { name: /today/i });
    expect(today).toBeInTheDocument();
  });
});
