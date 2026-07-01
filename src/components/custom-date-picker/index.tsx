import {
  Controller,
  type FieldValues,
  type Path,
  useFormContext,
} from "react-hook-form";

import {
  DatePicker,
  type DatePickerProps,
} from "@mui/x-date-pickers/DatePicker";
import type { OverridableStringUnion } from "@mui/types";
import type { FormControlPropsSizeOverrides } from "@mui/material";

type DateField<T extends FieldValues> = DatePickerProps & {
  name: Path<T>;
  helperText?: string;
  size?: OverridableStringUnion<
    "small" | "medium",
    FormControlPropsSizeOverrides
  >;
};

const CustomDatePicker = <T extends FieldValues>({
  name,
  helperText,
  size,
  ...other
}: DateField<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <DatePicker
          {...field}
          slotProps={{
            textField: {
              error: !!error,
              helperText: error ? error.message : helperText,
              size: size || "small",
              sx: {
                width: "100%",
                "& .MuiPickersInputBase-root": {
                  borderRadius: 2,
                  bgcolor: "surface.300",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "surface.300",
                },
              },
            },
          }}
          {...other}
        />
      )}
    />
  );
};

export default CustomDatePicker;
