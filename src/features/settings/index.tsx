import { Stack } from "@mui/material";
import LanguagesAndTimeZones from "./components/lagnuages-and-timezones";

const SettingsView = () => {
  return (
    <Stack sx={{ gap: 2 }}>
      <LanguagesAndTimeZones />
    </Stack>
  );
};

export default SettingsView;
