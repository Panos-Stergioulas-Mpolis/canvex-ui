import { Navigate, createBrowserRouter } from "react-router-dom";

import paths from "src/routes/routes";

import authRoutes from "./auth";
import errorRoutes from "./error";
import mainRoutes from "./main";

export const routes = [
  ...authRoutes,
  ...mainRoutes,
  ...errorRoutes,
  { path: "*", element: <Navigate to={paths.page404} replace /> },
];

const router = createBrowserRouter(routes, { basename: "/" });

export default router;
