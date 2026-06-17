import type { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

import { render, screen } from "src/test-utils/custom-render";

import { routes } from "../../sections";
import mainRoutes from "../main";

type RouteType = {
  path?: string;
  element: ReactNode;
  index?: boolean;
  children?: RouteType[];
};

vi.mock("src/pages/404", () => ({
  default: () => <div>not found</div>,
}));

vi.mock("src/pages/board", () => ({
  default: () => <div>board page</div>,
}));

vi.mock("src/pages/chat", () => ({
  default: () => <div>chat page</div>,
}));

vi.mock("src/pages/calendar", () => ({
  default: () => <div>calendar page</div>,
}));

vi.mock("src/pages/user-list", () => ({
  default: () => <div>user-list page</div>,
}));

vi.mock("src/pages/user-role", () => ({
  default: () => <div>user-role page</div>,
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

  it("should render board Page for /board", async () => {
    render(
      <Routes>
        {mainRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children?.map((child) => (
              <Route
                key={child.path}
                path={child.path}
                element={child.element}
              />
            ))}
          </Route>
        ))}
      </Routes>,
      { initialEntries: ["/board"] },
    );
    const page = await screen.findByText(/board page/i);
    expect(page).toBeInTheDocument();
  });

  it("should render chat Page for /chat", async () => {
    render(
      <Routes>
        {mainRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children?.map((child) => (
              <Route
                key={child.path}
                path={child.path}
                element={child.element}
              />
            ))}
          </Route>
        ))}
      </Routes>,
      { initialEntries: ["/chat"] },
    );
    const page = await screen.findByText(/chat page/i);
    expect(page).toBeInTheDocument();
  });

  it("should render calendar Page for /calendar", async () => {
    render(
      <Routes>
        {mainRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children?.map((child) => (
              <Route
                key={child.path}
                path={child.path}
                element={child.element}
              />
            ))}
          </Route>
        ))}
      </Routes>,
      { initialEntries: ["/calendar"] },
    );
    const page = await screen.findByText(/calendar page/i);
    expect(page).toBeInTheDocument();
  });

  it("should render user-list Page for /user-list", async () => {
    render(
      <Routes>
        {mainRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children?.map((child) => (
              <Route
                key={child.path}
                path={child.path}
                element={child.element}
              />
            ))}
          </Route>
        ))}
      </Routes>,
      { initialEntries: ["/user-list"] },
    );
    const page = await screen.findByText(/user-list page/i);
    expect(page).toBeInTheDocument();
  });

  it("should render user-role Page for /user-role", async () => {
    render(
      <Routes>
        {mainRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children?.map((child) => (
              <Route
                key={child.path}
                path={child.path}
                element={child.element}
              />
            ))}
          </Route>
        ))}
      </Routes>,
      { initialEntries: ["/user-role"] },
    );
    const page = await screen.findByText(/user-role page/i);
    expect(page).toBeInTheDocument();
  });
});
