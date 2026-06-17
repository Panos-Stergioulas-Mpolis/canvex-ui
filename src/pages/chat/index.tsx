import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import ChatView from "src/features/chat";

const ChatPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("titles.chat", { ns: "meta" })}</title>
      </Helmet>

      <ChatView />
    </>
  );
};

export default ChatPage;
