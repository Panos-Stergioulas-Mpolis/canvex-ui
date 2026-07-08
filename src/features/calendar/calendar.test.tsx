import { render, screen } from "src/test-utils/custom-render";
import CalendarView from ".";

vi.mock("./components/toolbar", () => ({
  default: () => <div>toolbar</div>,
}));

describe("<CalendarView />", () => {
  it("should render correctly", () => {
    render(<CalendarView />);

    const defaultView = screen.getByRole("table", { name: /month view/i });
    expect(defaultView).toBeInTheDocument();
  });
  it("should render the toolbar component", () => {
    render(<CalendarView />);

    const toolbar = screen.getByText(/toolbar/i);
    expect(toolbar).toBeInTheDocument();
  });
});
