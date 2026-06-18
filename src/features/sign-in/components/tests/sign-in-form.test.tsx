import { render, screen } from "src/test-utils/custom-render";
import SignInForm from "../sign-in-form";
import userEvent from "@testing-library/user-event";
import { Route, Routes } from "react-router-dom";
import paths from "src/routes/routes";

describe("<SignInForm />", () => {
  it("should an email textfield", () => {
    render(<SignInForm />);

    const email = screen.getByRole("textbox", { name: /email/i });
    expect(email).toBeInTheDocument();
  });

  it("should a password field", () => {
    render(<SignInForm />);

    const password = screen.getByLabelText("Password *");
    expect(password).toBeInTheDocument();
  });

  it("should render a sign in button", () => {
    render(<SignInForm />);
    const button = screen.getByRole("button", { name: /sign in/i });
    expect(button).toBeInTheDocument();
  });

  it("should render a button that change the type of the password field from password to text", async () => {
    const user = userEvent.setup();
    render(<SignInForm />);

    const toggleButton = screen.getByRole("button", {
      name: /toggle-password/i,
    });

    expect(toggleButton).toBeInTheDocument();

    const password = screen.getByLabelText("Password *");
    expect(password).toHaveAttribute("type", "password");

    await user.click(toggleButton);
    expect(password).toHaveAttribute("type", "text");

    await user.click(toggleButton);
    expect(password).toHaveAttribute("type", "password");
  });

  it("should render the a forgot password link that navigates toy to the forgot password page", async () => {
    const user = userEvent.setup();
    render(
      <Routes>
        <Route path={paths.signIn} element={<SignInForm />} />
        <Route
          path={paths.forgotPassword}
          element={<div>forgot password page</div>}
        />
      </Routes>,
      { initialEntries: [paths.signIn] },
    );

    const forgotPasswordLink = screen.getByRole("link", {
      name: /forgot password/i,
    });

    expect(forgotPasswordLink).toBeInTheDocument();

    const nullForgotPassword = screen.queryByText(/forgot password page/i);
    expect(nullForgotPassword).not.toBeInTheDocument();

    await user.click(forgotPasswordLink);

    const forgotPasswordPage = screen.getByText(/forgot password page/i);
    expect(forgotPasswordPage).toBeInTheDocument();
  });

  it("should render the typed characters for each field", async () => {
    const user = userEvent.setup();
    render(<SignInForm />);

    const email = screen.getByRole("textbox", { name: /email/i });
    const password = screen.getByLabelText("Password *");

    await user.type(email, "test email");
    expect(email).toHaveValue("test email");

    await user.type(password, "test password");
    expect(password).toHaveValue("test password");
  });

  it("should render both error messages for the email and password fields", async () => {
    const user = userEvent.setup();
    render(<SignInForm />);

    const submit = screen.getByRole("button", { name: /sign in/i });
    await user.click(submit);

    const emailRequired = screen.getByText(/email address is required/i);
    const passwordRequired = screen.getByText(
      /password must be at least 8 characters/i,
    );

    expect(emailRequired).toBeInTheDocument();
    expect(passwordRequired).toBeInTheDocument();
  });
});
