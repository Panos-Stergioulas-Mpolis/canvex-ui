import { render, screen } from "src/test-utils/custom-render";
import CreateEventForm from "../create-event-form";
import userEvent from "@testing-library/user-event";

const mockToggle = vi.fn();

describe("<CreateEventForm />", () => {
  it("should render all the fields", () => {
    render(<CreateEventForm handleToggle={mockToggle} />);

    const title = screen.getByRole("textbox", { name: /title/i });
    expect(title).toBeInTheDocument();

    const description = screen.getByRole("textbox", { name: /description/i });
    expect(description).toBeInTheDocument();

    const startDate = screen.getByRole("group", { name: /start date/i });
    expect(startDate).toBeInTheDocument();

    const endDate = screen.getByRole("group", { name: /end date/i });
    expect(endDate).toBeInTheDocument();

    const startTime = screen.getByRole("group", { name: /start time/i });
    expect(startTime).toBeInTheDocument();

    const endTime = screen.getByRole("group", { name: /end time/i });
    expect(endTime).toBeInTheDocument();
  });

  it("should render a cancel button tha calls the mockToggle function when it gets clicked", async () => {
    const user = userEvent.setup();

    render(<CreateEventForm handleToggle={mockToggle} />);

    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    expect(cancelButton).toBeInTheDocument();

    await user.click(cancelButton);
    expect(mockToggle).toHaveBeenCalled();
  });

  it("should render render all the error messages", async () => {
    const user = userEvent.setup();

    render(<CreateEventForm handleToggle={mockToggle} />);

    const submitButton = screen.getByRole("button", { name: /create/i });
    expect(submitButton).toBeInTheDocument();

    await user.click(submitButton);

    const titleError = screen.getByText(/title is required/i);
    expect(titleError).toBeInTheDocument();

    const descriptionError = screen.getByText(/description is required/i);
    expect(descriptionError).toBeInTheDocument();

    const startDateError = screen.getByText(/start date is required/i);
    expect(startDateError).toBeInTheDocument();

    const startTimeError = screen.getByText(/start time is required/i);
    expect(startTimeError).toBeInTheDocument();

    const endTimeError = screen.getByText(/end time is required/i);
    expect(endTimeError).toBeInTheDocument();

    const endDateError = screen.getByText(/end date is required/i);
    expect(endDateError).toBeInTheDocument();
  });
});
