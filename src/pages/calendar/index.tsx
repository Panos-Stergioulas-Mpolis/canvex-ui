import { Helmet } from "react-helmet-async";
import useLocales from "src/locales/use-locales";
import CalendarView from "src/features/calendar";

const CalendarPage = () => {
  const { t } = useLocales();
  return (
    <>
      <Helmet>
        <title>{t("titles.calendar", { ns: "meta" })}</title>
      </Helmet>

      <CalendarView />
    </>
  );
};

export default CalendarPage;
