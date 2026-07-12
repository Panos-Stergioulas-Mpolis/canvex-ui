import { Button, IconButton, Stack } from "@mui/material";
import { useForm, type SubmitHandler } from "react-hook-form";
import FormProvider from "src/components/form-provider";
import type { SignInInputs } from "src/types/index";
import { yupResolver } from "@hookform/resolvers/yup";
import useLocales from "src/locales/use-locales";
import {
  createSignInSchema,
  signInDefaultValues,
} from "src/form-schemas/sign-in";
import CustomTextField from "src/components/custom-text-field";

import paths from "src/routes/routes";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";

const SignInForm = () => {
  const { t } = useLocales();
  const navigate = useNavigate();
  const [isPassword, setIsPassword] = useState(true);
  const methods = useForm<SignInInputs>({
    resolver: yupResolver(createSignInSchema(t)),
    defaultValues: signInDefaultValues,
  });
  const {
    formState: { isSubmitting },
  } = methods;

  const togglePassword = () => {
    setIsPassword(!isPassword);
  };

  const handleSubmit: SubmitHandler<SignInInputs> = async (data) => {
    console.log(data);
    navigate(paths.board);
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit}>
      <Stack sx={{ gap: 3 }}>
        <CustomTextField name="email" label={t("signIn.labels.email")} />
        <Stack sx={{ gap: 0.5 }}>
          <CustomTextField
            name="password"
            label={t("signIn.labels.password")}
            type={isPassword ? "password" : "text"}
            slotProps={{
              input: {
                endAdornment: (
                  <IconButton
                    size="small"
                    onClick={togglePassword}
                    aria-label="toggle-password"
                  >
                    <Icon
                      icon={isPassword ? "el:eye-open" : "formkit:eyeclosed"}
                      width={20}
                    />
                  </IconButton>
                ),
              },
            }}
          />
          <Button
            color="primary"
            sx={{ alignSelf: "flex-end", width: "fit-content" }}
            variant="text"
            size="small"
            component={Link}
            to={paths.forgotPassword}
          >
            {t("buttons.forgotPassword")}
          </Button>
        </Stack>

        <Button loading={isSubmitting} variant="outlined" type="submit">
          {t("buttons.signIn")}
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default SignInForm;
