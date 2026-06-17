import { render, screen } from "src/test-utils/custom-render";
import ChatPage from ".";

vi.mock("src/features/chat", () => ({
  default: () => <div>chat view</div>,
}));

describe("<ChatPage />", () => {
  it("should render the chat view", () => {
    render(<ChatPage />);

    const view = screen.getByText(/chat view/i);
    expect(view).toBeInTheDocument();
  });
});
