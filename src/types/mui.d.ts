import "@mui/material/styles";

import type { FontStyleExtend } from "src/theme/typography";

declare module "@mui/material/styles" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TypographyVariants extends FontStyleExtend {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TypographyVariantsOptions extends Partial<FontStyleExtend> {}

  interface Theme {
    customShadows: CustomShadowsType;
  }

  interface ThemeOptions {
    customShadows?: CustomShadowsType;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    link: true;
  }
}
