import {
  alpha,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import Logo from "src/components/logo";
import LeftSideItem from "./components/left-side-item";
import { Icon } from "@iconify/react";

const AuthLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const { t } = useTranslation();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  const leftSideItems = [
    {
      icon: (
        <Stack
          sx={{
            p: 1,
            backgroundColor: alpha(theme.palette.primary.light, 0.1),
            borderRadius: 2,
            color: "primary.light",
          }}
        >
          <Icon icon="mdi-light:view-dashboard" width={20} />
        </Stack>
      ),
      title: t("layouts.auth.leftSideItems.dashboard"),
    },
    {
      icon: (
        <Stack
          sx={{
            p: 1,
            backgroundColor: alpha(theme.palette.secondary.light, 0.1),
            borderRadius: 2,
            color: "secondary.light",
          }}
        >
          <Icon icon="quill:calendar" width={20} />
        </Stack>
      ),
      title: t("layouts.auth.leftSideItems.calendar"),
    },
    {
      icon: (
        <Stack
          sx={{
            p: 1,
            backgroundColor: alpha(theme.palette.warning.light, 0.1),
            borderRadius: 2,
            color: "warning.light",
          }}
        >
          <Icon icon="tabler:messages" width={20} />
        </Stack>
      ),
      title: t("layouts.auth.leftSideItems.chat"),
    },
  ];

  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      {mdUp && (
        <Stack
          sx={{
            p: 5,
            width: "60%",
            height: "100%",
            background: `linear-gradient(155deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${theme.palette.background.default} 45%)`,
            borderRight: "1px solid",
            borderColor: "border.default",
            gap: 3,
          }}
          id="left-side"
        >
          <Logo size={30} includeLabel />
          <Typography variant="h2">{t("layouts.auth.title")}</Typography>
          <Typography variant="body1" sx={{ color: "grey.100" }}>
            {t("layouts.auth.caption")}
          </Typography>
          <Stack sx={{ gap: 2 }}>
            {leftSideItems.map((item) => {
              return (
                <LeftSideItem
                  icon={item.icon}
                  title={item.title}
                  key={item.title}
                />
              );
            })}
          </Stack>
          <Typography variant="caption" sx={{ mt: "auto", color: "grey.200" }}>
            {t("copyright", { year: new Date().getFullYear() })}
          </Typography>
        </Stack>
      )}
      <Stack sx={{ p: 5, width: "100%" }} id="right-side">
        {children}
      </Stack>
    </Stack>
  );
};

export default AuthLayout;
