import {
  Controller,
  type FieldValues,
  type Path,
  useFormContext,
} from "react-hook-form";

import { TextField, type TextFieldProps } from "@mui/material";

type CustomTextFieldProps<T extends FieldValues> = TextFieldProps & {
  name: Path<T>;
  type?: string;
  helperText?: string;
};

const CustomTextField = <T extends FieldValues>({
  name,
  type,
  helperText,
  ...other
}: CustomTextFieldProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          sx={{
            ".MuiOutlinedInput-root": {
              borderRadius: 2,
              bgcolor: "surface.300",
            },
          }}
          variant={other.variant ?? "outlined"}
          fullWidth
          type={type}
          error={!!error}
          size={other.size ?? "small"}
          helperText={error ? error.message : helperText}
          {...other}
        />
      )}
    />
  );
};

export default CustomTextField;
