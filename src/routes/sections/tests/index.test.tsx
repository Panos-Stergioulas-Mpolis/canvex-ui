import type { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

import { render, screen } from "src/test-utils/custom-render";

import { routes } from "../../sections";

type RouteType = {
  path?: string;
  element: ReactNode;
  index?: boolean;
  children?: RouteType[];
};

vi.mock("src/pages/404", () => ({
  default: () => <div>not found</div>,
}));

describe("Main routes", () => {
  it("should render 404Page for wrong url", async () => {
    render(
      <Routes>
        {routes.map((route: RouteType) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children?.map((child) =>
              child.index ? (
                <Route key="index" index element={child.element} />
              ) : (
                <Route
                  key={child.path}
                  path={child.path}
                  element={child.element}
                />
              ),
            )}
          </Route>
        ))}
      </Routes>,
      { initialEntries: ["/wrong-url"] },
    );

    const page = await screen.findByText(/not found/i);
    expect(page).toBeInTheDocument();
  });
});
