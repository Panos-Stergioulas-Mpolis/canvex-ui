/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import LoadingScreen from "src/components/loading-screen";

import paths from "src/routes/routes";

const HomePage = lazy(() => import("src/pages/home"));

const mainRoutes = [
  {
    path: paths.root,
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [{ index: true, element: <HomePage /> }],
  },
];

export default mainRoutes;
