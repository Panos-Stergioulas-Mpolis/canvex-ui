/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import LoadingScreen from "src/components/loading-screen";

import paths from "src/routes/routes";

const NotFoundPage = lazy(() => import("src/pages/404"));
const AccessDeniedPage = lazy(() => import("src/pages/403"));

const errorRoutes = [
  {
    path: paths.root,
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      { path: paths.page404, element: <NotFoundPage /> },
      { path: paths.page403, element: <AccessDeniedPage /> },
    ],
  },
];

export default errorRoutes;
