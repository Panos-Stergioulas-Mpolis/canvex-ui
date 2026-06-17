import { render, screen } from "src/test-utils/custom-render";
import UserBubble from "../user-buble";
import userEvent from "@testing-library/user-event";

describe("<UserBubble />", () => {
  it("should a button ", () => {
    render(<UserBubble />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should open a popover when the button gets clicked", async () => {
    const user = userEvent.setup();
    render(<UserBubble />);

    const nullPopover = screen.queryByText(/The content of the Popover./i);
    expect(nullPopover).not.toBeInTheDocument();

    const button = screen.getByRole("button");
    await user.click(button);

    const popover = screen.getByText(/The content of the Popover./i);
    expect(popover).toBeInTheDocument();
  });
});
