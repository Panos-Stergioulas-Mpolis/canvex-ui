import { render, screen } from "src/test-utils/custom-render";
import AuthLayout from ".";
import * as mui from "@mui/material";

let mockUseMediaQueryReturnValue = true;

vi.mock("@mui/material", async () => {
  const actual = await vi.importActual<typeof mui>("@mui/material");
  return {
    ...actual,
    useMediaQuery: vi.fn(() => mockUseMediaQueryReturnValue),
  };
});

vi.mock("./components/left-side-item", () => ({
  default: () => <div>left side item</div>,
}));

vi.mock("src/components/logo", () => ({
  default: () => <div>logo</div>,
}));

describe("<AuthLayout />", () => {
  beforeEach(() => {
    mockUseMediaQueryReturnValue = true;
  });
  it("should render the children correctly", () => {
    render(<AuthLayout>children</AuthLayout>);

    const children = screen.getByText(/children/i);
    expect(children).toBeInTheDocument();
  });

  it("should render 3 left side items", () => {
    render(<AuthLayout />);

    const leftSideItems = screen.getAllByText(/left side item/i);
    expect(leftSideItems).toHaveLength(3);
  });

  it("should render the logo component", () => {
    render(<AuthLayout />);

    const logo = screen.getByText(/logo/i);
    expect(logo).toBeInTheDocument();
  });

  it("should render the title", () => {
    render(<AuthLayout />);

    const title = screen.getByText(/Your team's creative hub./i);
    expect(title).toBeInTheDocument();
  });

  it("should render the caption", () => {
    render(<AuthLayout />);

    const caption = screen.getByText(
      /Schedules, diagrams, whiteboards, and chat — all in one place for your team./i,
    );
    expect(caption).toBeInTheDocument();
  });

  it("should render the copyright", () => {
    render(<AuthLayout />);

    const copyright = screen.getByText(/Canvex · All rights reserved/i);
    expect(copyright).toBeInTheDocument();
  });
});
