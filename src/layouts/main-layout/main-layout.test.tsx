import { render, screen } from "src/test-utils/custom-render";
import MainLayout from ".";

vi.mock("./components/side-bar", () => ({
  default: () => <div>side bar</div>,
}));

describe("<MainLayout />", () => {
  it("should render the children correctly", () => {
    render(<MainLayout>children</MainLayout>);

    const children = screen.getByText(/children/i);
    expect(children).toBeInTheDocument();
  });

  it("should render the side bar component", () => {
    render(<MainLayout />);

    const sideBar = screen.getByText(/side bar/i);
    expect(sideBar).toBeInTheDocument();
  });
});
