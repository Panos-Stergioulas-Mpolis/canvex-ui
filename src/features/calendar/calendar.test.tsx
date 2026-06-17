import { render, screen } from "src/test-utils/custom-render";
import CalendarView from ".";

describe("<CalendarView />", () => {
  it("should render correctly", () => {
    render(<CalendarView />);

    const text = screen.getByText(/calendar/i);
    expect(text).toBeInTheDocument();
  });
});
