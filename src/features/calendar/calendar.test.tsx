import { render, screen } from "src/test-utils/custom-render";
import CalendarView from ".";

describe("<CalendarView />", () => {
  it("should render correctly", () => {
    render(<CalendarView />);

    const defaultView = screen.getByRole("table", { name: /month view/i });
    expect(defaultView).toBeInTheDocument();
  });
});
