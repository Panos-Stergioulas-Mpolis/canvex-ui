import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  DialogActions,
  DialogContent,
  Divider,
  Stack,
} from "@mui/material";
import type { FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import CustomTextField from "src/components/custom-text-field";
import FormProvider from "src/components/form-provider";
import {
  createCreateEventSchema,
  createEventDefaultValues,
} from "src/form-schemas/create-event";
import type { CreateEventInputs } from "src/types/index";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import CustomDatePicker from "src/components/custom-date-picker";
import CustomTimePicker from "src/components/custom-time-picker";

type CreateEventFormProps = {
  handleToggle: (val: boolean) => void;
};

const CreateEventForm: FC<CreateEventFormProps> = (props) => {
  const { handleToggle } = props;
  const { t } = useTranslation();
  const methods = useForm<CreateEventInputs>({
    resolver: yupResolver(createCreateEventSchema(t)),
    defaultValues: createEventDefaultValues,
  });
  const {
    formState: { isSubmitting },
  } = methods;

  const handleSubmit: SubmitHandler<CreateEventInputs> = async (data) => {
    handleToggle(false);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit}>
      <DialogContent>
        <Stack sx={{ gap: 2 }}>
          <CustomTextField
            name="title"
            label={t("calendar.createEventForm.title")}
          />
          <Stack
            direction="row"
            sx={{ alignItems: "center", gap: 2, width: "100%" }}
          >
            <CustomDatePicker
              sx={{ flex: 1 }}
              label={t("calendar.createEventForm.startDate")}
              name="startDate"
            />
            <CustomDatePicker
              sx={{ flex: 1 }}
              label={t("calendar.createEventForm.endDate")}
              name="endDate"
            />
          </Stack>
          <Stack
            direction="row"
            sx={{ alignItems: "center", gap: 2, width: "100%" }}
          >
            <CustomTimePicker
              sx={{ flex: 1 }}
              name="startTime"
              label={t("calendar.createEventForm.startTime")}
            />
            <CustomTimePicker
              sx={{ flex: 1 }}
              name="endTime"
              label={t("calendar.createEventForm.endTime")}
            />
          </Stack>

          <CustomTextField
            name="description"
            label={t("calendar.createEventForm.description")}
            multiline
            minRows={5}
          />
        </Stack>
      </DialogContent>
      <Divider />
      <DialogActions sx={{ justifyContent: "space-between" }}>
        <Button variant="text" onClick={() => handleToggle(false)}>
          {t("buttons.cancel")}
        </Button>
        <Button variant="contained" type="submit" loading={isSubmitting}>
          {t("buttons.create")}
        </Button>
      </DialogActions>
    </FormProvider>
  );
};

export default CreateEventForm;
