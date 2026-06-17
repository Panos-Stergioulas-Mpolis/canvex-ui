import { alpha, Stack, Typography, useTheme } from "@mui/material";
import type { FC, ReactElement } from "react";

type LeftSideItemProp = {
  icon: ReactElement;
  title: string;
};

const LeftSideItem: FC<LeftSideItemProp> = (props) => {
  const { icon, title } = props;
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        gap: 1,
        backgroundColor: alpha(theme.palette.grey[50], 0.07),
        maxWidth: 300,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "border.default",
        p: 2,
      }}
    >
      {icon}
      <Typography variant="body2" sx={{ color: "grey.100" }}>
        {title}
      </Typography>
    </Stack>
  );
};

export default LeftSideItem;
