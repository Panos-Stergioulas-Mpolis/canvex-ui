import { Icon } from "@iconify/react";
import {
  Button,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import useLocales from "src/locales/use-locales";
import CreateEventForm from "../create-event-form";

const CreateEvent = () => {
  const { t } = useLocales();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (state: boolean) => {
    setIsOpen(state);
  };
  return (
    <>
      {smUp ? (
        <Button
          onClick={() => handleToggle(true)}
          startIcon={<Icon icon="material-symbols:add-2" />}
          variant="outlined"
          size="small"
          sx={{
            width: "fit-content",
            color: "common.white",
            borderColor: "common.white",
            ml: "auto",
          }}
        >
          {t("buttons.createEvent")}
        </Button>
      ) : (
        <IconButton
          sx={{ color: "common.white", ml: "auto" }}
          onClick={() => handleToggle(true)}
        >
          <Icon icon="material-symbols:add-2" width={18} />
        </IconButton>
      )}
      <Dialog
        open={isOpen}
        fullWidth
        maxWidth="md"
        onClose={() => handleToggle(false)}
      >
        <DialogTitle>{t("calendar.createEvent.title")}</DialogTitle>
        <Divider />
        <CreateEventForm handleToggle={handleToggle} />
      </Dialog>
    </>
  );
};

export default CreateEvent;
