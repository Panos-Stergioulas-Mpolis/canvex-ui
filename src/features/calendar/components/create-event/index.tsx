import { Icon } from "@iconify/react";
import { Button, Dialog, DialogTitle, Divider } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CreateEventForm from "../create-event-form";

const CreateEvent = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (state: boolean) => {
    setIsOpen(state);
  };
  return (
    <>
      <Button
        onClick={() => handleToggle(true)}
        startIcon={<Icon icon="material-symbols:add-2" />}
        variant="outlined"
        size="small"
        sx={{
          width: "fit-content",
          color: "common.white",
          borderColor: "common.white",
        }}
      >
        {t("buttons.createEvent")}
      </Button>
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
