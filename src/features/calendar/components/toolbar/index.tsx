import { Icon } from "@iconify/react";
import {
  Button,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { type FC } from "react";
import type { ToolbarProps } from "react-big-calendar";
import useLocales from "src/locales/use-locales";
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
  const { t } = useLocales();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));
  const { label, onNavigate } = props;

  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        gap: 1,
        mb: 2,
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

      <CreateEvent />
    </Stack>
  );
};

export default Toolbar;
