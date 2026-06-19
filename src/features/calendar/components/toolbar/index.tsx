import { Icon } from "@iconify/react";
import { Button, IconButton, Stack } from "@mui/material";
import type { FC } from "react";
import type { ToolbarProps } from "react-big-calendar";
import { useTranslation } from "react-i18next";

const Toolbar: FC<
  ToolbarProps<
    {
      title: string;
      start: Date;
      end: Date;
    },
    object
  >
> = (props) => {
  const { t } = useTranslation();
  const { label, onNavigate } = props;
  return (
    <Stack direction="row" sx={{ alignItems: "center", gap: 2, mb: 2 }}>
      <Button
        size="small"
        startIcon={<Icon icon="fluent-mdl2:goto-today" />}
        variant="outlined"
        onClick={() => onNavigate("TODAY")}
        sx={{
          width: "fit-content",
          color: "common.white",
          borderColor: "common.white",
        }}
      >
        {t("buttons.today")}
      </Button>
      <Stack direction="row" sx={{ gap: 1 }}>
        <IconButton onClick={() => onNavigate("PREV")}>
          <Icon icon="simple-line-icons:arrow-up" width={16} />
        </IconButton>
        <IconButton onClick={() => onNavigate("NEXT")}>
          <Icon icon="simple-line-icons:arrow-down" width={16} />
        </IconButton>
      </Stack>
      {label}
    </Stack>
  );
};

export default Toolbar;
