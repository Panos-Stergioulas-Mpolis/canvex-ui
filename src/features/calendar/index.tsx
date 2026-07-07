import {
  Calendar,
  dateFnsLocalizer,
  type Components,
  type HeaderProps,
  type stringOrDate,
  type ToolbarProps,
  type View,
} from "react-big-calendar";
import { format, parse, startOfWeek, getDay, getTime } from "date-fns";
import { enUS, el } from "date-fns/locale";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Toolbar from "./components/toolbar";

const locales = {
  en: enUS,
  el: el,
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
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  const messages = {
    time: t("calendar.time"),
    event: t("calendar.event"),
    noEventsInRange: t("calendar.noEventsInRange"),
  };

  const culture = i18n.language === "el" ? "el" : "en-US";
  const [view, setView] = useState<View>("month");
  const events = [
    {
      title: "Test Event",
      start: new Date("2026-06-19T12:00:00"),
      end: new Date("2026-06-19T15:00:00"),
    },
  ];
  const [date, setDate] = useState<stringOrDate>(new Date());

  const onNavigate = useCallback(
    (newDate: stringOrDate) => setDate(newDate),
    [setDate],
  );

  const onView = useCallback((newView: View) => setView(newView), [setView]);

  const components: Components = useMemo(() => {
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
      month: {
        header: (data: HeaderProps) => (
          <Typography variant="body1" key={data.date.getDay()}>
            {t(`calendar.days.${data.date.getDay()}`)}
          </Typography>
        ),
      },
      week: {
        header: (data: HeaderProps) => (
          <Typography variant="body1" key={data.date.getDay()}>
            {t(`calendar.days.${data.date.getDay()}`)} {data.date.getDate()}
          </Typography>
        ),
      },
    };
  }, []);

  return (
    <Stack sx={{ width: "100%", p: 4 }}>
      <Calendar
        date={date}
        culture={culture}
        messages={messages}
        view={view}
        events={events}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: "calc(100vh - 64px)",
          width: "100%",
          overflowX: mdDown ? "scroll" : "auto",
        }}
        onView={onView}
        defaultDate={date}
        onNavigate={onNavigate}
        components={
          components as
            | Components<
                {
                  title: string;
                  start: Date;
                  end: Date;
                },
                object
              >
            | undefined
        }
      />
    </Stack>
  );
};

export default CalendarView;
