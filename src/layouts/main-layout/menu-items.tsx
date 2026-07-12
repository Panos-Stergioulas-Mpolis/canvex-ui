import paths from "src/routes/routes";
import type { MenuItemsType } from "src/types/index";

export const menuItems: MenuItemsType[] = [
  {
    label: "navItems.labels.board",
    icon: "material-symbols:dashboard-outline-rounded",
    link: paths.board,
  },
  {
    label: "navItems.labels.calendar",
    icon: "quill:calendar",
    link: paths.calendar,
  },
  { label: "navItems.labels.chat", icon: "tabler:messages", link: paths.chat },
  {
    label: "navItems.labels.settings",
    icon: "tabler:settings",
    link: paths.settings,
  },
  {
    label: "navItems.labels.users",
    icon: "tabler:users",
    children: [
      {
        label: "navItems.labels.userList",
        link: paths.userList,
      },
      {
        label: "navItems.labels.userRole",
        link: paths.userRole,
      },
    ],
  },
];
