import { type FC, type PropsWithChildren, useMemo } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

import breakpoints from "./breakpoints";
import palette from "./palette";
import { customShadows, shadows } from "./shadows";
import typography from "./typography";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      typography,
      breakpoints,
      shape: { borderRadius: 4 },
      shadows,
      customShadows,
    }),
    [],
  );

  const theme = createTheme(themeOptions);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
