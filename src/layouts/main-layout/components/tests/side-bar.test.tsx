import { render, screen } from "src/test-utils/custom-render";
import SideBar from "../side-bar";
import userEvent from "@testing-library/user-event";
import { menuItems } from "../../menu-items";

vi.mock("../user-buble", () => ({
  default: () => <div>user buble</div>,
}));

describe("<SideBar />", () => {
  it("should render the the toggle side bar button", () => {
    render(<SideBar />);

    const toggleButton = screen.getByRole("button", {
      name: /toggle-side-bar/i,
    });
    expect(toggleButton).toBeInTheDocument();
  });

  it("should toggle the side bar when the toggle button gets clicked", async () => {
    const user = userEvent.setup();
    render(<SideBar />);

    const nullCanvexDefault = screen.queryByText(/canvex/i);
    expect(nullCanvexDefault).not.toBeInTheDocument();

    const toggleButton = screen.getByRole("button", {
      name: /toggle-side-bar/i,
    });

    await user.click(toggleButton);

    const canvex = screen.getByText(/canvex/i);
    expect(canvex).toBeInTheDocument();

    await user.click(toggleButton);

    const nullCanvex = screen.queryByText(/canvex/i);
    expect(nullCanvex).not.toBeInTheDocument();
  });

  it("should render the correct number of li elements", () => {
    render(<SideBar />);

    const liElements = screen.getAllByRole("listitem");
    expect(liElements).toHaveLength(menuItems.length);
  });

  it("should render a user bubble", () => {
    render(<SideBar />);

    const userBubble = screen.getByText(/user buble/i);
    expect(userBubble).toBeInTheDocument();
  });
});
