import paths from "src/routes/routes";
import { menuItems } from "./menu-items";

describe("menu-items", () => {
  it("should return the correct values", () => {
    expect(menuItems).toEqual([
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
      {
        label: "navItems.labels.chat",
        icon: "tabler:messages",
        link: paths.chat,
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
    ]);
  });
});
