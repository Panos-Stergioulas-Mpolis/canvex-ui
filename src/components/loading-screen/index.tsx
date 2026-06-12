import type { FC } from "react";

import { Box, LinearProgress, type BoxProps } from "@mui/material";

const LoadingScreen: FC<BoxProps> = (props) => {
  const { sx, ...others } = props;

  return (
    <Box
      sx={{
        px: 6,
        width: "100%",
        minHeight: "100vh",
        maxHeight: "100%",
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...sx,
      }}
      {...others}
    >
      <LinearProgress color="primary" sx={{ width: "100%", maxWidth: 350 }} />
    </Box>
  );
};

export default LoadingScreen;
