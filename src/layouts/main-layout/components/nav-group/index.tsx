import { Icon } from "@iconify/react";
import {
  alpha,
  Box,
  Button,
  List,
  ListItem,
  Popover,
  Stack,
} from "@mui/material";
import { useState, type FC } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import NavItem from "../nav-item";

type NavGroupProps = {
  isOpen: boolean;
  label: string;
  subItems: { label: string; link: string }[];
  icon?: string;
};

const NavGroup: FC<NavGroupProps> = (props) => {
  const { isOpen, icon, label, subItems } = props;
  const { t } = useTranslation();
  const location = useLocation();
  const [isButtonOpened, setIsButtonOpened] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const isPopOverOpen = Boolean(anchorEl);
  const id = isPopOverOpen ? "simple-popover" : undefined;

  const toggleSelected = () => {
    setIsButtonOpened(!isButtonOpened);
  };

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const checkIfIsSelected = () => {
    return (
      isButtonOpened || subItems.find((item) => item.link === location.pathname)
    );
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Button
        onClick={isOpen ? toggleSelected : handleOpen}
        size="large"
        sx={{
          width: "100%",
          gap: 1,
          justifyContent: isOpen ? "start" : "center",
          bgcolor: (theme) =>
            checkIfIsSelected()
              ? alpha(theme.palette.primary.main, 0.07)
              : "transparent",
          color: checkIfIsSelected() ? "primary.dark" : "grey.300",
          borderRadius: 2,
          mb: 1,
          "&:hover": {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.07),
          },
        }}
      >
        {<Icon icon={icon ?? "mdi:dot"} width={25} />}
        {isOpen && t(label)}
        {isOpen && (
          <Stack
            sx={{
              ml: "auto",
              rotate: isButtonOpened ? "-90deg" : "90deg",
            }}
          >
            <Icon icon="weui:arrow-filled" width={13} />
          </Stack>
        )}
      </Button>
      {isButtonOpened && isOpen && (
        <List sx={{ display: "flex", flexDirection: "column", gap: 1, p: 0 }}>
          {subItems.map((item) => {
            return (
              <ListItem key={item.label} sx={{ width: "100%", p: 0 }}>
                <NavItem
                  isOpen={isOpen}
                  isSelected={location.pathname === item.link}
                  label={item.label}
                  link={item.link}
                />
              </ListItem>
            );
          })}
        </List>
      )}
      {!isOpen && (
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
          <Stack sx={{ p: 1, gap: 1 }}>
            {subItems.map((item) => {
              return (
                <NavItem
                  isOpen={true}
                  isSelected={location.pathname === item.link}
                  label={item.label}
                  link={item.link}
                />
              );
            })}
          </Stack>
        </Popover>
      )}
    </Box>
  );
};

export default NavGroup;
