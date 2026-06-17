import type {
  TypographyVariantsOptions,
  CSSObject,
} from "@mui/material/styles";
import { pxToRem, responsiveFontSizes } from "src/utils/typography";

export type FontStyleExtend = {
  fontWeightSemiBold: CSSObject["fontWeight"];
  fontFamilySecondary: CSSObject["fontFamily"];
};

const secondaryFont = "DM Sans, Public Sans, sans-serif";
const primaryFont = "Syne, Public Sans, sans-serif";

const typography: TypographyVariantsOptions = {
  fontFamily: primaryFont,
  fontFamilySecondary: secondaryFont,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  h1: {
    fontFamily: primaryFont,
    fontWeight: 500,
    lineHeight: 1.3,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 48, md: 52, lg: 56 }),
  },
  h2: {
    fontFamily: primaryFont,
    fontWeight: 600,
    lineHeight: 1.2,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontFamily: primaryFont,
    fontWeight: 600,
    lineHeight: 1.1,
    fontSize: pxToRem(22),
    ...responsiveFontSizes({ sm: 28, md: 32, lg: 36 }),
  },
  h4: {
    fontFamily: primaryFont,
    fontWeight: 600,
    lineHeight: 1.1,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 22, md: 26, lg: 30 }),
  },
  h5: {
    fontFamily: primaryFont,
    fontWeight: 600,
    lineHeight: 1.1,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 24, md: 24, lg: 24 }),
  },
  h6: {
    fontFamily: primaryFont,
    fontWeight: 600,
    lineHeight: 1.2,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 20, md: 20, lg: 20 }),
  },
  subtitle1: {
    fontFamily: secondaryFont,
    fontWeight: 500,
    lineHeight: 1.3,
    fontSize: pxToRem(18),
  },
  subtitle2: {
    fontFamily: secondaryFont,
    fontWeight: 700,
    lineHeight: 1.3,
    fontSize: pxToRem(16),
  },
  body1: {
    fontFamily: secondaryFont,
    lineHeight: 1.3,
    fontSize: pxToRem(16),
  },
  body2: {
    fontFamily: secondaryFont,
    lineHeight: 1.4,
    fontSize: pxToRem(14),
  },
  caption: {
    fontFamily: secondaryFont,
    fontWeight: 600,
    letterSpacing: "0.5px",
    lineHeight: 1.3,
    fontSize: pxToRem(12),
  },
  overline: {
    fontFamily: secondaryFont,
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: "2px",
    fontSize: pxToRem(10),
    textTransform: "uppercase",
  },
  button: {
    fontFamily: primaryFont,
    textTransform: "unset",
    fontWeight: 500,
    fontSize: pxToRem(16),
  },
};

export default typography;
