import { Helmet } from "react-helmet-async";
import AccessDeniedView from "src/features/403";

const AccessDeniedPage = () => {
  return (
    <>
      <Helmet>
        <title>403</title>
      </Helmet>

      <AccessDeniedView />
    </>
  );
};

export default AccessDeniedPage;
