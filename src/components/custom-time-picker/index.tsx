import {
  Controller,
  type FieldValues,
  type Path,
  useFormContext,
} from "react-hook-form";

import type { OverridableStringUnion } from "@mui/types";
import type { FormControlPropsSizeOverrides } from "@mui/material";
import {
  TimePicker,
  type TimePickerProps,
} from "@mui/x-date-pickers/TimePicker";

type DateField<T extends FieldValues> = TimePickerProps & {
  name: Path<T>;
  helperText?: string;
  size?: OverridableStringUnion<
    "small" | "medium",
    FormControlPropsSizeOverrides
  >;
};

const CustomTimePicker = <T extends FieldValues>({
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
        <TimePicker
          sx={{
            ".MuiPickersInputBase-root": {
              borderRadius: 22,
            },
          }}
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

export default CustomTimePicker;
