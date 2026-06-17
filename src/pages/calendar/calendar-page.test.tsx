import { render, screen } from "src/test-utils/custom-render";
import CalendarPage from ".";

vi.mock("src/features/calendar", () => ({
  default: () => <div>calendar view</div>,
}));

describe("<CalendarPage />", () => {
  it("should render the calendar view", () => {
    render(<CalendarPage />);

    const view = screen.getByText(/calendar view/i);
    expect(view).toBeInTheDocument();
  });
});
