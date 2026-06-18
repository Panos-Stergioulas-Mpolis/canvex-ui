import { render, screen } from "src/test-utils/custom-render";
import SignInView from ".";
import userEvent from "@testing-library/user-event";
import { Route, Routes } from "react-router-dom";
import paths from "src/routes/routes";

vi.mock("./components/sign-in-form", () => ({
  default: () => <div>sign in form</div>,
}));

describe("<SignInView />", () => {
  it("should render the title and subtitle", () => {
    render(<SignInView />);

    const title = screen.getByText(/Welcome back/i);
    expect(title).toBeInTheDocument();

    const subTitle = screen.getByText(/Sign in to continue to your workspace/i);
    expect(subTitle).toBeInTheDocument();
  });

  it("should render the continue with google button", () => {
    render(<SignInView />);

    const button = screen.getByRole("button", {
      name: /continue with google/i,
    });
    expect(button).toBeInTheDocument();
  });

  it("should render the sign in form", () => {
    render(<SignInView />);

    const form = screen.getByText(/sign in form/i);
    expect(form).toBeInTheDocument();
  });

  it("should render the a sign up link that navigates toy to the sign up page", async () => {
    const user = userEvent.setup();
    render(
      <Routes>
        <Route path={paths.signIn} element={<SignInView />} />
        <Route path={paths.signUp} element={<div>sign up page</div>} />
      </Routes>,
      { initialEntries: [paths.signIn] },
    );

    const signUpLink = screen.getByRole("link", {
      name: /sign up/i,
    });

    expect(signUpLink).toBeInTheDocument();

    const nullSignUp = screen.queryByText(/sign up page/i);
    expect(nullSignUp).not.toBeInTheDocument();

    await user.click(signUpLink);

    const signUpPage = screen.getByText(/sign up page/i);
    expect(signUpPage).toBeInTheDocument();
  });
});
