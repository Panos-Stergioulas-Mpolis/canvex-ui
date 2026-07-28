import { Stack } from "@mui/material";
import LanguagesAndTimeZones from "./components/lagnuages-and-timezones";
import Appearance from "./components/appearance";

const SettingsView = () => {
  return (
    <Stack sx={{ gap: 2 }}>
      <LanguagesAndTimeZones />
      <Appearance />
    </Stack>
  );
};

export default SettingsView;
