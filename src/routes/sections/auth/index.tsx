/* eslint-disable react-refresh/only-export-components */

import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import LoadingScreen from "src/components/loading-screen";
import AuthLayout from "src/layouts/auth-layout";

import paths from "src/routes/routes";

const ForgotPasswordPage = lazy(() => import("src/pages/forgot-password"));
const SignInPage = lazy(() => import("src/pages/sign-in"));
const SignUpPage = lazy(() => import("src/pages/sign-up"));

const authRoutes = [
  {
    path: paths.root,
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <AuthLayout>
          <Outlet />
        </AuthLayout>
      </Suspense>
    ),
    children: [
      { path: paths.forgotPassword, element: <ForgotPasswordPage /> },
      { path: paths.signIn, element: <SignInPage /> },
      { path: paths.signUp, element: <SignUpPage /> },
    ],
  },
];

export default authRoutes;
