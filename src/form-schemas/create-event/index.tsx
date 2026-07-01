import type { TFunction } from "i18next";
import * as Yup from "yup";

export const createCreateEventSchema = (t: TFunction) => {
  return Yup.object({
    title: Yup.string().required(t("title.required", { ns: "validation" })),
    startDate: Yup.string().required(
      t("startDate.required", { ns: "validation" }),
    ),
    endDate: Yup.string().required(t("endDate.required", { ns: "validation" })),
    startTime: Yup.string().required(
      t("startTime.required", { ns: "validation" }),
    ),
    endTime: Yup.string().required(t("endTime.required", { ns: "validation" })),
  });
};

export const createEventDefaultValues = {
  title: "",
  startDate: "",
  endDate: "",
  startTime: "",
  endTime: "",
  description: "",
};
