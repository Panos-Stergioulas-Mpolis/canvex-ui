import { render, screen } from "src/test-utils/custom-render";
import { Event } from "../event";
import { dateFnsLocalizer, type EventProps } from "react-big-calendar";
import userEvent from "@testing-library/user-event";

const mockProps: EventProps = {
  event: {
    id: "1",
    description: "test description",
    title: "test title",
    start: new Date("2026-07-08T10:00:00Z"),
    end: new Date("2026-07-08T11:00:00Z"),
  },
  title: "test title",
  localizer: dateFnsLocalizer({}),
  slotStart: new Date("2026-07-08T10:00:00Z"),
  slotEnd: new Date("2026-07-08T11:00:00Z"),
  continuesAfter: false,
  continuesPrior: false,
};

describe("<Event />", () => {
  it("should render the time and  tile correctly", () => {
    render(<Event {...mockProps} />);

    const time = screen.getByText(/11:00 am/i);
    expect(time).toBeInTheDocument();

    const title = screen.getByText(/test title/i);
    expect(title).toBeInTheDocument();
  });

  it("should open the event popover when the event gets clicked", async () => {
    const user = userEvent.setup();
    render(<Event {...mockProps} />);

    const nullDescription = screen.queryByText(/test description/i);
    expect(nullDescription).not.toBeInTheDocument();

    const button = screen.getByRole("button");
    await user.click(button);

    const title = screen.getByText(/11:00 am - 12:00 pm test title/i);
    expect(title).toBeInTheDocument();

    const description = screen.getByText(/test description/i);
    expect(description).toBeInTheDocument();
  });
});
