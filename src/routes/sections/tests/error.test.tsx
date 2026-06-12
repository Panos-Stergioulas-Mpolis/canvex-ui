import { Route, Routes } from "react-router-dom";

import { render, screen } from "src/test-utils/custom-render";

import errorRoutes from "../error";

vi.mock("src/pages/404", () => ({
  default: () => <div>404 page not found</div>,
}));
vi.mock("src/pages/403", () => ({
  default: () => <div>403 access denied</div>,
}));

describe("Error routes", () => {
  it("should render 404 Page for /404", async () => {
    render(
      <Routes>
        {errorRoutes.map((route) => (
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
      { initialEntries: ["/404"] },
    );

    const page = await screen.findByText(/404 page not found/i);
    expect(page).toBeInTheDocument();
  });

  it("should render 403 Page for /403", async () => {
    render(
      <Routes>
        {errorRoutes.map((route) => (
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
      { initialEntries: ["/403"] },
    );
    const page = await screen.findByText(/403 access denied/i);
    expect(page).toBeInTheDocument();
  });
});
