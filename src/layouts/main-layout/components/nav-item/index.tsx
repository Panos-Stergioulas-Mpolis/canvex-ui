import { Icon } from "@iconify/react";
import { alpha, Button } from "@mui/material";
import type { FC } from "react";
import useLocales from "src/locales/use-locales";
import { Link } from "react-router-dom";

type NacItemProps = {
  label: string;
  isOpen: boolean;
  isSelected: boolean;
  link?: string;
  icon?: string;
};

const NavItem: FC<NacItemProps> = (props) => {
  const { label, isOpen, icon, isSelected, link } = props;
  const { t } = useLocales();

  return (
    <Button
      component={Link}
      to={link ?? ""}
      size="large"
      sx={{
        width: "100%",
        gap: 1,
        justifyContent: isOpen ? "start" : "center",
        bgcolor: (theme) =>
          isSelected ? alpha(theme.palette.primary.main, 0.07) : "transparent",
        color: isSelected ? "primary.dark" : "grey.300",
        borderRadius: 2,
        "&:hover": {
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.07),
        },
      }}
    >
      {<Icon icon={icon ?? "mdi:dot"} width={25} />}
      {isOpen && t(label)}
    </Button>
  );
};

export default NavItem;
