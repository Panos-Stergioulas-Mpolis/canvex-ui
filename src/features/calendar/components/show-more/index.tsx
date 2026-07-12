import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import { useState, type FC } from "react";
import type { ShowMoreProps } from "react-big-calendar";
import useLocales from "src/locales/use-locales";
import { formatDateAndTime } from "src/utils/formats";
import EventsGroup from "../events-group";

const ShowMore: FC<ShowMoreProps> = (props) => {
  const { count, events, slotDate } = props;

  const { t } = useLocales();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <>
      <Button
        size="small"
        variant="contained"
        sx={{ width: "95%", background: "grey.300", p: 0, ml: 0.5 }}
        onClick={openDialog}
      >
        + {count}
      </Button>
      <Dialog open={isDialogOpen} onClose={closeDialog} fullWidth maxWidth="md">
        <DialogTitle>{formatDateAndTime(slotDate, "PPPP")}</DialogTitle>
        <Divider />
        <DialogContent>
          <EventsGroup events={events} />
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={closeDialog}>{t("buttons.close")}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ShowMore;
