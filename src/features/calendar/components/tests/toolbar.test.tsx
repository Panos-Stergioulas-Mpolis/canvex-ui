import { render, screen } from "src/test-utils/custom-render";
import Toolbar from "../toolbar";
import { dateFnsLocalizer, type ToolbarProps } from "react-big-calendar";
import * as mui from "@mui/material";
import userEvent from "@testing-library/user-event";

const mockUseMediaQueryReturnValue = true;

vi.mock("@mui/material", async () => {
  const actual = await vi.importActual<typeof mui>("@mui/material");
  return {
    ...actual,
    useMediaQuery: vi.fn(() => mockUseMediaQueryReturnValue),
  };
});

vi.mock("../create-event", () => ({
  default: () => <div>create event</div>,
}));

const localizer = dateFnsLocalizer({});

const mockOnView = vi.fn();
const mockOnNavigate = vi.fn();

const mockProps: ToolbarProps = {
  date: new Date(),
  label: "test",
  localizer: localizer,
  onNavigate: mockOnNavigate,
  onView: mockOnView,
  view: "month",
  views: [],
};

describe("<Toolbar />", () => {
  it("should render the create event component", () => {
    render(<Toolbar {...mockProps} />);

    const createEvent = screen.getByText(/create event/i);
    expect(createEvent).toBeInTheDocument();
  });

  it("should render the today button", () => {
    render(<Toolbar {...mockProps} />);

    const button = screen.getByRole("button", { name: /today/i });
    expect(button).toBeInTheDocument();
  });

  it("should render the label", () => {
    render(<Toolbar {...mockProps} />);

    const label = screen.getByText(/test/i);
    expect(label).toBeInTheDocument();
  });

  it("should render all the view buttons and call the monOnView whn they get clicked", async () => {
    const user = userEvent.setup();
    render(<Toolbar {...mockProps} />);

    const dayView = screen.getByRole("button", { name: "Day" });
    expect(dayView).toBeInTheDocument();
    await user.click(dayView);
    expect(mockOnView).toHaveBeenCalledTimes(1);

    const weekView = screen.getByRole("button", { name: /week/i });
    expect(weekView).toBeInTheDocument();
    await user.click(weekView);
    expect(mockOnView).toHaveBeenCalledTimes(2);

    const monthView = screen.getByRole("button", { name: /month/i });
    expect(monthView).toBeInTheDocument();
    await user.click(monthView);
    expect(mockOnView).toHaveBeenCalledTimes(3);

    const agendaView = screen.getByRole("button", { name: /agenda/i });
    expect(agendaView).toBeInTheDocument();
    await user.click(agendaView);
    expect(mockOnView).toHaveBeenCalledTimes(4);
  });

  it("should render the next and previous button and call the mockOnNavigate when they get clicked", async () => {
    const user = userEvent.setup();
    render(<Toolbar {...mockProps} />);

    const previousButton = screen.getByRole("button", { name: /previous/i });
    expect(previousButton).toBeInTheDocument();
    await user.click(previousButton);
    expect(mockOnNavigate).toHaveBeenCalledTimes(1);

    const nextButton = screen.getByRole("button", { name: /next/i });
    expect(nextButton).toBeInTheDocument();
    await user.click(nextButton);
    expect(mockOnNavigate).toHaveBeenCalledTimes(2);
  });
});
