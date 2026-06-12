import { Route, Routes } from "react-router-dom";

import { render, screen } from "src/test-utils/custom-render";

import authRoutes from "../auth";

vi.mock("src/pages/sign-in", () => ({
  default: () => <div>signIn</div>,
}));

vi.mock("src/pages/sign-up", () => ({
  default: () => <div>signUp</div>,
}));

vi.mock("src/pages/forgot-password", () => ({
  default: () => <div>forgot password</div>,
}));

describe("Auth routes", () => {
  it("should render SignInPage for /sign-in", async () => {
    render(
      <Routes>
        {authRoutes.map((route) => (
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
      { initialEntries: ["/sign-in"] },
    );

    const page = await screen.findByText(/signIn/i);
    expect(page).toBeInTheDocument();
  });

  it("should render SignUpPage for /sign-up", async () => {
    render(
      <Routes>
        {authRoutes.map((route) => (
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
      { initialEntries: ["/sign-up"] },
    );

    const page = await screen.findByText(/signUp/i);
    expect(page).toBeInTheDocument();
  });

  it("should render ForgotPasswordPage for /forgot-password", async () => {
    render(
      <Routes>
        {authRoutes.map((route) => (
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
      { initialEntries: ["/forgot-password"] },
    );

    const page = await screen.findByText(/forgot password/i);
    expect(page).toBeInTheDocument();
  });
});
