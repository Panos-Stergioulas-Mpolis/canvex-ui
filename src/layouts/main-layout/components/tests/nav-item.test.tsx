import { render, screen } from "src/test-utils/custom-render";
import NavItem from "../nav-item";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../..";
import userEvent from "@testing-library/user-event";

describe("<NavItem />", () => {
  it("should render a link element with the correct name", () => {
    render(<NavItem isOpen isSelected label="test label" link="/board" />);

    const link = screen.getByRole("link", { name: /test label/i });
    expect(link).toBeInTheDocument();
  });

  it("should hide the label is the isOpen props is false", () => {
    render(<NavItem isOpen={false} isSelected label="test label" />);

    const label = screen.queryByText(/test label/i);
    expect(label).not.toBeInTheDocument();
  });

  it("should navigate the user to the correct route", async () => {
    const user = userEvent.setup();
    render(
      <Routes>
        <Route
          path="/board"
          element={
            <NavItem isOpen isSelected label="test label" link="/calendar" />
          }
        />
        <Route path="/calendar" element={<MainLayout>calendar</MainLayout>} />
      </Routes>,
      { initialEntries: ["/board"] },
    );

    const nullCalendar = screen.queryByText(/calendar/i);
    expect(nullCalendar).not.toBeInTheDocument();

    const link = screen.getByRole("link", { name: /test label/i });

    await user.click(link);

    const calendar = screen.getByText(/calendar/i);
    expect(calendar).toBeInTheDocument();
  });
});
