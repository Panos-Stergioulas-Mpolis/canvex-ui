import { render, screen } from "src/test-utils/custom-render";
import ChatView from ".";

describe("<ChatView />", () => {
  it("should render correctly", () => {
    render(<ChatView />);

    const text = screen.getByText(/chat/i);
    expect(text).toBeInTheDocument();
  });
});
