import { Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import type { FC } from "react";

type LogoProps = {
  size: number;
  includeLabel?: boolean;
};

const Logo: FC<LogoProps> = (props) => {
  const { size, includeLabel } = props;
  return (
    <Stack
      direction="row"
      sx={{ alignItems: "center", gap: 1.5, color: "common.white" }}
    >
      <Stack
        sx={{
          backgroundColor: "primary.main",
          width: "fit-content",
          borderRadius: 2.5,
          p: 0.5,
        }}
      >
        <Icon icon="ph:squares-four-duotone" width={size} height={size} />
      </Stack>
      {includeLabel && <Typography variant="subtitle1">Canvex</Typography>}
    </Stack>
  );
};

export default Logo;
