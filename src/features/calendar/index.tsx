import {
  Calendar,
  dateFnsLocalizer,
  type Components,
  type EventProps,
  type HeaderProps,
  type ShowMoreProps,
  type stringOrDate,
  type ToolbarProps,
} from "react-big-calendar";
import { format, parse, startOfWeek, getDay, getTime } from "date-fns";
import { enGB, el } from "date-fns/locale";
import { Stack, Typography } from "@mui/material";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import { useCallback, useMemo, useState } from "react";
import useLocales from "src/locales/use-locales";
import Toolbar from "./components/toolbar";
import { Event } from "./components/event";
import ShowMore from "./components/show-more";
import { mockEvents } from "src/mock-data";

const locales = {
  en: enGB,
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
  const { t, currentLang } = useLocales();
  const messages = {
    time: t("calendar.time"),
    event: t("calendar.event"),
    noEventsInRange: t("calendar.noEventsInRange"),
  };

  const culture = currentLang.value === "el" ? "el" : "en-US";

  const [date, setDate] = useState<stringOrDate>(new Date());

  const onNavigate = useCallback(
    (newDate: stringOrDate) => setDate(newDate),
    [setDate],
  );

  const components: Components = useMemo(() => {
    return {
      showMore: (data: ShowMoreProps) => <ShowMore {...data} />,
      event: (data: EventProps) => <Event {...data} />,
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
    <Stack sx={{ width: "100%" }}>
      <Calendar
        date={date}
        culture={culture}
        messages={messages}
        view={"month"}
        events={mockEvents}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: "calc(100vh - 64px)",
          width: "100%",
        }}
        defaultDate={date}
        onNavigate={onNavigate}
        components={components}
      />
    </Stack>
  );
};

export default CalendarView;
