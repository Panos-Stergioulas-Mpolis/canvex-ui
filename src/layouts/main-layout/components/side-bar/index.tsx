import {
  styled,
  type Theme,
  type CSSObject,
  useTheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import { DRAWER_WIDTH, MIN_DRAWER_WIDTH } from "src/constants";
import Logo from "src/components/logo";
import { ListItem, Stack, useMediaQuery } from "@mui/material";
import { Icon } from "@iconify/react";
import { menuItems } from "../../menu-items";
import NavItem from "../nav-item";
import NavGroup from "../nav-group";
import UserBubble from "../user-buble";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: MIN_DRAWER_WIDTH,
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const SideBar = () => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        width: isSidebarOpen && mdUp ? DRAWER_WIDTH : MIN_DRAWER_WIDTH,
      }}
    >
      <IconButton
        aria-label="toggle-side-bar"
        onClick={toggle}
        sx={{
          position: "absolute",
          top: 18.5,
          left: isSidebarOpen ? DRAWER_WIDTH - 23 : MIN_DRAWER_WIDTH - 23,
          transition: "left 0.2s",
          zIndex: 1300,
        }}
      >
        <Stack
          sx={{
            rotate: isSidebarOpen ? "-90deg" : "90deg",
            color: "primary.main",
          }}
        >
          <Icon icon="iconamoon:arrow-up-6-circle-fill" width={30} />
        </Stack>
      </IconButton>

      <Drawer variant="permanent" open={isSidebarOpen}>
        <Stack
          sx={{
            width: "100%",
            height: "100vh",
            alignItems: isSidebarOpen ? "left" : "center",
            p: 2.5,
            gap: 2,
          }}
        >
          <Logo size={30} includeLabel={isSidebarOpen} />

          <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {menuItems.map((item) => (
              <ListItem key={item.label} sx={{ width: "100%", p: 0 }}>
                {item.children ? (
                  <NavGroup
                    subItems={item.children}
                    isOpen={isSidebarOpen}
                    label={item.label}
                    icon={item.icon}
                    key={item.label}
                  />
                ) : (
                  <NavItem
                    isOpen={isSidebarOpen}
                    isSelected={location.pathname === item.link}
                    label={item.label}
                    icon={item.icon}
                    link={item.link}
                    key={item.label}
                  />
                )}
              </ListItem>
            ))}
          </List>
          <UserBubble />
        </Stack>
      </Drawer>
    </Box>
  );
};

export default SideBar;
