import { Button, Card, Stack } from "@mui/material";
import type { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import paths from "src/routes/routes";

const ErrorLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const { t } = useTranslation();

  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: 700,
          height: "100vh",
          maxHeight: 700,
          borderRadius: 3,
          gap: 2,
          border: "1px solid",
          borderColor: "border.default",
        }}
      >
        {children}
        <Button
          component={RouterLink}
          to={paths.board}
          size="large"
          variant="contained"
          color="primary"
        >
          {t("buttons.returnHome")}
        </Button>
      </Card>
    </Stack>
  );
};

export default ErrorLayout;
