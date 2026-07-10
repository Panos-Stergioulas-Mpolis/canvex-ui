import { render, screen } from "src/test-utils/custom-render";
import ShowMore from "../show-more";
import { dateFnsLocalizer, type ShowMoreProps } from "react-big-calendar";
import userEvent from "@testing-library/user-event";

vi.mock("../events-group", () => ({
  default: () => <div>events group</div>,
}));

const mockProps: ShowMoreProps = {
  count: 2,
  events: [
    {
      id: "1",
      title: "Front end team weekly",
      start: new Date("2026-07-08T10:00:00Z"),
      end: new Date("2026-07-08T11:00:00Z"),
      description:
        "Check up on teams progress and general discussion about the projects.",
    },
  ],
  localizer: dateFnsLocalizer({}),
  remainingEvents: [
    {
      id: "2",
      title: "1:1 with Marcus",
      start: new Date("2026-07-01T14:00:00Z"),
      end: new Date("2026-07-01T14:30:00Z"),
      description: "Quick sync.",
    },
    {
      id: "3",
      title: "Q3 Roadmap Planning Session",
      start: new Date("2026-07-01T09:00:00Z"),
      end: new Date("2026-07-01T11:30:00Z"),
      description:
        "Deep dive into the Q3 roadmap across all product lines. We'll be reviewing the backlog, prioritizing initiatives based on customer feedback and business impact, and aligning on resourcing for the next quarter. Please come prepared with your team's top three priorities and any blockers you're anticipating so we can address them collaboratively before the quarter kicks off.",
    },
  ],
  slotDate: new Date("2026-07-01"),
  slot: 1,
};

describe("<ShowMore />", () => {
  it("should render button with the correct label", () => {
    render(<ShowMore {...mockProps} />);

    const button = screen.getByRole("button", { name: "+ 2" });
    expect(button).toBeInTheDocument();
  });

  it("should open the show more dialog when the button gets clicked", async () => {
    const user = userEvent.setup();
    render(<ShowMore {...mockProps} />);

    const nullDialog = screen.queryByRole("dialog");
    expect(nullDialog).not.toBeInTheDocument();

    const button = screen.getByRole("button", { name: "+ 2" });
    await user.click(button);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();

    const eventsGroup = screen.getByText(/events group/i);
    expect(eventsGroup).toBeInTheDocument();
  });
});
