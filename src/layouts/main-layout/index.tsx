import { Stack } from "@mui/material";
import type { FC, PropsWithChildren } from "react";
import SideBar from "./components/side-bar";

const MainLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <Stack direction="row">
      <SideBar />
      <Stack>{children}</Stack>
    </Stack>
  );
};

export default MainLayout;
