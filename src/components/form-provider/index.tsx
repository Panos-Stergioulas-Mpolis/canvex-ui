import type { ReactNode } from "react";
import {
  FormProvider as RhfFormProvider,
  type UseFormReturn,
  type FieldValues,
} from "react-hook-form";

type FormProviderProps<T extends FieldValues> = {
  children: ReactNode;
  onSubmit: (data: T) => void;
  methods: UseFormReturn<T>;
};

const FormProvider = <T extends FieldValues>({
  children,
  onSubmit,
  methods,
}: FormProviderProps<T>) => {
  return (
    <RhfFormProvider {...methods}>
      <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </RhfFormProvider>
  );
};

export default FormProvider;
