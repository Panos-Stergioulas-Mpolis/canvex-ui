import { render, screen } from "src/test-utils/custom-render";
import CreateEvent from "../create-event";
import userEvent from "@testing-library/user-event";

vi.mock("../create-event-form", () => ({
  default: () => <div>create event form</div>,
}));

describe("<CreateEvent />", () => {
  it("should not be open by default", () => {
    render(<CreateEvent />);

    const nullDialog = screen.queryByRole("dialog");
    expect(nullDialog).not.toBeInTheDocument();
  });

  it("should open the dialog", async () => {
    const user = userEvent.setup();
    render(<CreateEvent />);

    const openButton = screen.getByRole("button", { name: /create event/i });
    await user.click(openButton);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
  });

  it("should render the title of the dialog", async () => {
    const user = userEvent.setup();
    render(<CreateEvent />);

    const openButton = screen.getByRole("button", { name: /create event/i });
    await user.click(openButton);

    const title = screen.getByText("Create Event");
    expect(title).toBeInTheDocument();
  });

  it("should render the title of the dialog", async () => {
    const user = userEvent.setup();
    render(<CreateEvent />);

    const openButton = screen.getByRole("button", { name: /create event/i });
    await user.click(openButton);

    const form = screen.getByText(/create event form/i);
    expect(form).toBeInTheDocument();
  });
});
