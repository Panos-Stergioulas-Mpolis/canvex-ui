import { render, screen } from "src/test-utils/custom-render";
import ErrorLayout from ".";
import { Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("<ErrorLayout />", () => {
  it("should render the children", () => {
    render(<ErrorLayout>children</ErrorLayout>);

    const children = screen.getByText(/children/i);
    expect(children).toBeInTheDocument();
  });

  it("should render a return home link", () => {
    render(<ErrorLayout />);

    const link = screen.getByRole("link", { name: /return home/i });
    expect(link).toBeInTheDocument();
  });

  it("should navigate the user to the board page when the return home get clicked", async () => {
    const user = userEvent.setup();
    render(
      <Routes>
        <Route path="/404" element={<ErrorLayout>test</ErrorLayout>} />
        <Route path="/board" element={<div>board</div>} />
      </Routes>,
      { initialEntries: ["/404"] },
    );

    const nullBoard = screen.queryByText(/board/i);
    expect(nullBoard).not.toBeInTheDocument();

    const link = screen.getByRole("link", { name: /return home/i });
    await user.click(link);

    const board = screen.getByText(/board/i);
    expect(board).toBeInTheDocument();
  });
});
