import type { TFunction } from "i18next";
import * as Yup from "yup";

export const createSignInSchema = (t: TFunction) => {
  return Yup.object({
    email: Yup.string()
      .required(t("email.required", { ns: "validation" }))
      .email(t("email.invalid", { ns: "validation" })),
    password: Yup.string()
      .min(8, t("password.min", { ns: "validation" }))
      .required(t("password.required", { ns: "validation" })),
  });
};

export const signInDefaultValues = { email: "", password: "" };
