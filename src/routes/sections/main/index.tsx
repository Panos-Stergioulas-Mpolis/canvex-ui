/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import LoadingScreen from "src/components/loading-screen";
import MainLayout from "src/layouts/main-layout";

import paths from "src/routes/routes";

const BoardPage = lazy(() => import("src/pages/board"));
const CalendarPage = lazy(() => import("src/pages/calendar"));
const ChatPage = lazy(() => import("src/pages/chat"));
const SettingsPage = lazy(() => import("src/pages/settings"));
const UserListPage = lazy(() => import("src/pages/user-list"));
const UserRolePage = lazy(() => import("src/pages/user-role"));

const mainRoutes = [
  {
    path: paths.root,
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <MainLayout>
          <Outlet />
        </MainLayout>
      </Suspense>
    ),
    children: [
      { path: paths.board, element: <BoardPage /> },
      { path: paths.chat, element: <ChatPage /> },
      { path: paths.calendar, element: <CalendarPage /> },
      { path: paths.settings, element: <SettingsPage /> },
      { path: paths.userList, element: <UserListPage /> },
      { path: paths.userRole, element: <UserRolePage /> },
    ],
  },
];

export default mainRoutes;
