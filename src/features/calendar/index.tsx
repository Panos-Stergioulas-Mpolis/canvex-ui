import {
  Calendar,
  dateFnsLocalizer,
  type stringOrDate,
  type ToolbarProps,
  type View,
} from "react-big-calendar";
import { format, parse, startOfWeek, getDay, getTime } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import { Stack } from "@mui/material";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Toolbar from "./components/toolbar";

const locales = {
  en: enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  getTime,
  locales,
});

const CalendarView = () => {
  const { t, i18n } = useTranslation();

  const messages = {
    today: t("calendar.today"),
    previous: t("calendar.previous"),
    next: t("calendar.next"),
    month: t("calendar.month"),
    week: t("calendar.week"),
    day: t("calendar.day"),
    agenda: t("calendar.agenda"),
    date: t("calendar.date"),
    time: t("calendar.time"),
    event: t("calendar.event"),
    noEventsInRange: t("calendar.noEventsInRange"),
  };

  const culture = i18n.language === "el" ? "el" : "en-US";
  const [view, setView] = useState<View>("month");
  const events = [
    {
      title: "Test Event",
      start: new Date("2026-06-19"),
      end: new Date("2026-06-19"),
    },
  ];
  const [date, setDate] = useState<stringOrDate>(new Date());

  const onNavigate = useCallback(
    (newDate: stringOrDate) => setDate(newDate),
    [setDate],
  );

  const onView = useCallback((newView: View) => setView(newView), [setView]);

  const components = useMemo(() => {
    return {
      toolbar: (
        data: ToolbarProps<
          {
            title: string;
            start: Date;
            end: Date;
          },
          object
        >,
      ) => <Toolbar {...data} />,
    };
  }, []);

  return (
    <Stack sx={{ width: "100%", p: 4 }}>
      <Calendar
        culture={culture}
        messages={messages}
        view={view}
        events={events}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 64px)", width: "100%" }}
        onView={onView}
        defaultDate={date}
        onNavigate={onNavigate}
        components={components}
      />
    </Stack>
  );
};

export default CalendarView;
