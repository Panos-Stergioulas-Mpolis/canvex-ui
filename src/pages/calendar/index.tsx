import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import CalendarView from "src/features/calendar";

const CalendarPage = () => {
  const { t } = useTranslation();
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
