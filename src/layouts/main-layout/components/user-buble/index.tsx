import { Avatar, ButtonBase, Popover, Typography } from "@mui/material";
import { useState } from "react";

const UserBubble = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <ButtonBase
        aria-describedby={id}
        onClick={handleClick}
        tabIndex={-1}
        aria-label="Avatar image"
        sx={{
          width: "fit-content",
          mt: "auto",
          borderRadius: "40px",
          "&:has(:focus-visible)": {
            outline: "2px solid",
            outlineOffset: "2px",
          },
        }}
      >
        <Avatar
          sx={{
            bgcolor: "tertiary.main",

            color: "common.white",
          }}
        >
          <Typography variant="h6">U</Typography>
        </Avatar>
      </ButtonBase>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </>
  );
};

export default UserBubble;
