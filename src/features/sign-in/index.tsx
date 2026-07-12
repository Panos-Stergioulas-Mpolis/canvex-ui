import { Button, Divider, Stack, Typography } from "@mui/material";
import useLocales from "src/locales/use-locales";
import SignInForm from "./components/sign-in-form";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import paths from "src/routes/routes";

const SignInView = () => {
  const { t } = useLocales();
  return (
    <Stack sx={{ gap: 5, width: "100%", maxWidth: 600 }}>
      <Stack sx={{ gap: 1 }}>
        <Typography color="common.white" variant="h4">
          {t("signIn.title")}
        </Typography>
        <Typography
          color="common.white"
          variant="body1"
          sx={{ color: "grey.100" }}
        >
          {t("signIn.subtitle")}
        </Typography>
      </Stack>
      <SignInForm />
      <Stack direction="row" sx={{ alignItems: "center", gap: 2 }}>
        <Divider sx={{ flex: 1 }} />
        <Typography variant="body2" sx={{ color: "grey.200" }}>
          {t("signIn.or")}
        </Typography>
        <Divider sx={{ flex: 1 }} />
      </Stack>
      <Button
        startIcon={<Icon icon="flat-color-icons:google" />}
        variant="outlined"
      >
        {t("buttons.continueWithGoogle")}
      </Button>
      <Stack
        direction="row"
        sx={{ gap: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant="body2" sx={{ color: "grey.200" }}>
          {t("signIn.dontHaveAnAccount")}
        </Typography>
        <Button
          color="primary"
          sx={{ alignSelf: "flex-end", width: "fit-content" }}
          variant="text"
          size="small"
          component={Link}
          to={paths.signUp}
        >
          {t("buttons.signUp")} →
        </Button>
      </Stack>
    </Stack>
  );
};

export default SignInView;
