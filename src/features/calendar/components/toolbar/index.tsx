import { Icon } from "@iconify/react";
import { Button, ButtonGroup, IconButton, Stack } from "@mui/material";
import type { FC } from "react";
import type { ToolbarProps } from "react-big-calendar";
import { useTranslation } from "react-i18next";
import CreateEvent from "../create-event";

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
  const { label, onNavigate, onView } = props;
  return (
    <Stack direction="row" sx={{ alignItems: "center", gap: 2, mb: 2 }}>
      <Button
        size="small"
        startIcon={<Icon icon="material-symbols:today" />}
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
      <ButtonGroup variant="outlined" size="small" sx={{ ml: "auto" }}>
        <Button
          onClick={() => onView("day")}
          startIcon={
            <Icon icon="material-symbols:calendar-today-outline-rounded" />
          }
          sx={{
            width: "fit-content",
            color: "common.white",
            borderColor: "common.white",
          }}
        >
          {t("buttons.day")}
        </Button>
        <Button
          onClick={() => onView("week")}
          startIcon={<Icon icon="material-symbols:view-week-outline" />}
          sx={{
            width: "fit-content",
            color: "common.white",
            borderColor: "common.white",
          }}
        >
          {t("buttons.week")}
        </Button>
        <Button
          onClick={() => onView("month")}
          startIcon={
            <Icon icon="material-symbols:calendar-month-outline-rounded" />
          }
          sx={{
            width: "fit-content",
            color: "common.white",
            borderColor: "common.white",
          }}
        >
          {t("buttons.month")}
        </Button>
        <Button
          onClick={() => onView("agenda")}
          startIcon={<Icon icon="material-symbols:view-agenda-outline" />}
          sx={{
            width: "fit-content",
            color: "common.white",
            borderColor: "common.white",
          }}
        >
          {t("buttons.agenda")}
        </Button>
      </ButtonGroup>
      <CreateEvent />
    </Stack>
  );
};

export default Toolbar;
