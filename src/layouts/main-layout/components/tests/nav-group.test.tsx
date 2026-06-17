import { render, screen } from "src/test-utils/custom-render";
import NavGroup from "../nav-group";
import userEvent from "@testing-library/user-event";

const subItems = [{ label: "child 1", link: "link" }];

vi.mock("../nav-item", () => ({
  default: () => <div>nav item</div>,
}));

describe("<NavGroup />", () => {
  it("should render the group button correctly", () => {
    render(<NavGroup isOpen subItems={subItems} label="test label" />);

    const button = screen.getByRole("button", { name: /test label/i });
    expect(button).toBeInTheDocument();
  });

  it("should not render the label if the isOpen prop is fault", () => {
    render(<NavGroup isOpen={false} label="test label" subItems={subItems} />);

    const nullLabel = screen.queryByText(/test label/i);
    expect(nullLabel).not.toBeInTheDocument();
  });

  it("should render 1 subItem when the button gets clicked", async () => {
    const user = userEvent.setup();
    render(<NavGroup isOpen label="test label" subItems={subItems} />);

    const button = screen.getByRole("button", { name: /test label/i });

    await user.click(button);

    const navItems = screen.getAllByText(/nav item/i);
    expect(navItems).toHaveLength(1);
  });
});
