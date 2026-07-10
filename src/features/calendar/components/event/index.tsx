import { ButtonBase, Divider, Popover, Stack, Typography } from "@mui/material";

import { useState, type FC } from "react";
import type { EventProps } from "react-big-calendar";
import { formatDateAndTime } from "src/utils/formats";

export const Event: FC<EventProps> = (props) => {
  const { event } = props;

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const isPopOverOpen = Boolean(anchorEl);
  const id = isPopOverOpen ? "simple-popover" : undefined;

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ButtonBase
        onClick={handleOpen}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "baseline",
          gap: 1,
          justifyContent: "flex-start",
        }}
      >
        <Typography variant="body2">
          {event.start && formatDateAndTime(event.start, "HH:mm aa")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {event.title}
        </Typography>
      </ButtonBase>

      <Popover
        id={id}
        open={isPopOverOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Stack sx={{ p: 1, gap: 1, maxWidth: 500 }}>
          <Typography variant="body1">
            {event.start && formatDateAndTime(event.start, "HH:mm aa")} -{" "}
            {event.end && formatDateAndTime(event.end, "HH:mm aa")}{" "}
            {event.title}
          </Typography>
          <Divider />
          <Typography variant="body2">{event.description}</Typography>
        </Stack>
      </Popover>
    </>
  );
};
