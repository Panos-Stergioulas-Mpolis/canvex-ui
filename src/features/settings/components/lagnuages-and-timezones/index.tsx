import { Icon } from "@iconify/react";
import {
  Card,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
  type SelectChangeEvent,
} from "@mui/material";
import { allLangs } from "src/locales/languages";
import useLocales from "src/locales/use-locales";

const LanguagesAndTimeZones = () => {
  const { t, onChangeLang, currentLang } = useLocales();

  const handleChange = (e: SelectChangeEvent<string>) => {
    onChangeLang(e.target.value);
  };
  return (
    <Card sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
      <Stack sx={{ gap: 0.5 }}>
        <Typography variant="h6">
          {t("settings.languagesAndTimeZones.title")}
        </Typography>
        <Typography variant="body2">
          {t("settings.languagesAndTimeZones.subtitle")}
        </Typography>
      </Stack>
      <Divider />
      <Stack direction="row" sx={{ gap: 3, flexWrap: "wrap" }}>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="select-language">
            {t("settings.languagesAndTimeZones.language")}
          </InputLabel>
          <Select
            labelId="select-language"
            value={currentLang.value}
            onChange={handleChange}
            input={
              <OutlinedInput
                label={t("settings.languagesAndTimeZones.language")}
              />
            }
          >
            {allLangs.map((lang) => (
              <MenuItem key={lang.value} value={lang.value}>
                <Stack direction="row" sx={{ alignItems: "center", gap: 1 }}>
                  <Icon icon={lang.icon} />
                  {lang.label}
                </Stack>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="select-language">
            {t("settings.languagesAndTimeZones.timezone")}
          </InputLabel>
          <Select
            labelId="select-language"
            input={
              <OutlinedInput
                label={t("settings.languagesAndTimeZones.timezone")}
              />
            }
          >
            {allLangs.map((lang) => (
              <MenuItem key={lang.value} value={lang.value}>
                <Stack direction="row" sx={{ alignItems: "center", gap: 1 }}>
                  <Icon icon={lang.icon} />
                  {lang.label}
                </Stack>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Card>
  );
};
export default LanguagesAndTimeZones;
