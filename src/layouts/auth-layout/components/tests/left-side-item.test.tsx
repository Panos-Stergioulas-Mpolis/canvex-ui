import { render, screen } from "src/test-utils/custom-render";
import LeftSideItem from "../left-side-item";

describe("<LeftSideItem />", () => {
  it("should render correctly", () => {
    render(<LeftSideItem title="test title" icon={<>icon</>} />);

    const text = screen.getByText(/test title/i);
    expect(text).toBeInTheDocument();

    const icon = screen.getByText(/icon/i);
    expect(icon).toBeInTheDocument();
  });
});
