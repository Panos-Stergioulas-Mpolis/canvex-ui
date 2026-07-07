import { Stack } from "@mui/material";
import type { FC, PropsWithChildren } from "react";
import SideBar from "./components/side-bar";

const MainLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <Stack direction="row" sx={{ width: "100vw" }}>
      <SideBar />
      <Stack sx={{ width: "100%", overflow: "hidden" }}>{children}</Stack>
    </Stack>
  );
};

export default MainLayout;
