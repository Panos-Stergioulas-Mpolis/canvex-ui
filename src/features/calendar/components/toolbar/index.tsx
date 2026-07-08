import { Icon } from "@iconify/react";
import {
  Button,
  ButtonGroup,
  IconButton,
  Popover,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState, type FC, type MouseEvent } from "react";
import type { ToolbarProps } from "react-big-calendar";
import { useTranslation } from "react-i18next";
import CreateEvent from "../create-event";
import { DRAWER_WIDTH, MIN_DRAWER_WIDTH } from "src/constants";
import { useAppSelector } from "src/store/store";
import { selectIsSideBarOpen } from "src/store/global/global-selectors";

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
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));
  const { label, onNavigate, onView } = props;
  const isSidebarOpen = useAppSelector(selectIsSideBarOpen);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpenPopOver = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handClosePopOver = () => {
    setAnchorEl(null);
  };

  const isPopOverOpen = Boolean(anchorEl);
  const id = isPopOverOpen ? "simple-popover" : undefined;
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        gap: 1,
        mb: 2,
        position: "absolute",
        width: `calc(100% - ${isSidebarOpen && mdUp ? DRAWER_WIDTH + 64 : MIN_DRAWER_WIDTH + 64}px )`,
      }}
    >
      {smUp ? (
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
      ) : (
        <IconButton sx={{ color: "common.white" }}>
          <Icon icon="material-symbols:today" width={18} />
        </IconButton>
      )}
      <Stack direction="row" sx={{ gap: 0.5 }}>
        <IconButton onClick={() => onNavigate("PREV")} aria-label="previous">
          <Icon icon="simple-line-icons:arrow-up" width={16} />
        </IconButton>
        <IconButton onClick={() => onNavigate("NEXT")} aria-label="next">
          <Icon icon="simple-line-icons:arrow-down" width={16} />
        </IconButton>
      </Stack>
      {label}
      {mdUp ? (
        <>
          {" "}
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
        </>
      ) : (
        <>
          <Popover
            id={id}
            open={isPopOverOpen}
            anchorEl={anchorEl}
            onClose={handClosePopOver}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Stack sx={{ p: 1.5, gap: 1.5 }}>
              <Button
                variant="outlined"
                size="small"
                onClick={() => onView("day")}
                startIcon={
                  <Icon icon="material-symbols:calendar-today-outline-rounded" />
                }
                sx={{
                  color: "common.white",
                  borderColor: "common.white",
                }}
              >
                {t("buttons.day")}
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => onView("week")}
                startIcon={<Icon icon="material-symbols:view-week-outline" />}
                sx={{
                  color: "common.white",
                  borderColor: "common.white",
                }}
              >
                {t("buttons.week")}
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => onView("month")}
                startIcon={
                  <Icon icon="material-symbols:calendar-month-outline-rounded" />
                }
                sx={{
                  color: "common.white",
                  borderColor: "common.white",
                }}
              >
                {t("buttons.month")}
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => onView("agenda")}
                startIcon={<Icon icon="material-symbols:view-agenda-outline" />}
                sx={{
                  color: "common.white",
                  borderColor: "common.white",
                }}
              >
                {t("buttons.agenda")}
              </Button>

              <CreateEvent />
            </Stack>
          </Popover>
          <IconButton onClick={handleOpenPopOver} sx={{ ml: "auto" }}>
            <Icon icon={"tabler:dots"} />
          </IconButton>
        </>
      )}
    </Stack>
  );
};

export default Toolbar;
