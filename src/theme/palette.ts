import { alpha, type PaletteMode } from "@mui/material";

export type ColorExtend = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

// ─── Neutrals ───────────────────────────────────────────────────────────────

const grey = {
  50: "#E8E9F0",
  100: "#D1D3E1",
  200: "#A4A8C3",
  300: "#787CA4",
  400: "#4B5185",
  500: "#2E3366", // mid-tone indigo-grey
  600: "#252A55",
  700: "#1C2044",
  800: "#141733",
  900: "#0C0D1C", // page background
};

// Dark surface scale (sidebar, cards, topbars)
const surface = {
  50: "#3A3D5C",
  100: "#31344F",
  200: "#282B42",
  300: "#1E2035",
  400: "#181A2E",
  500: "#13142A", // canvas nodes
  600: "#111225", // sidebar / paper
  700: "#0E0F1E", // topbar / surface 1
  800: "#0C0D1C", // page bg
  900: "#08090F",
};

// ─── Brand — Indigo/Violet (Primary) ────────────────────────────────────────

const indigo = {
  50: "#ECEEFF",
  100: "#D8DCFE",
  200: "#B2BAFD",
  300: "#8B97FC",
  400: "#7B8FFB", // primary light / icon tint
  500: "#5B6CF8", // primary main
  600: "#3A4AD4", // primary dark / hover
  700: "#2B38A8",
  800: "#1D267C",
  900: "#0E1350",
};

// ─── Accent — Cyan/Mint (Secondary) ─────────────────────────────────────────

const mint = {
  50: "#D4F5E9",
  100: "#C2F0DF",
  200: "#9EE7CB",
  300: "#7ADDB7",
  400: "#56D4A3",
  500: "#1D9E75", // success / online / secondary main
  600: "#178060",
  700: "#11624A",
  800: "#0B4435",
  900: "#062620",
};

// ─── Amber (Warning / Away) ──────────────────────────────────────────────────

const amber = {
  50: "#FEF3DC",
  100: "#FDEAC4",
  200: "#FCD794",
  300: "#FAC464",
  400: "#F9B34A",
  500: "#EF9F27", // warning main
  600: "#C47D14",
  700: "#995E0C",
  800: "#6E4107",
  900: "#432703",
};

// ─── Red (Error / Danger) ────────────────────────────────────────────────────

const red = {
  50: "#FCEAE4",
  100: "#F9D4CA",
  200: "#F4A995",
  300: "#EE7E61",
  400: "#E56A4A",
  500: "#D85A30", // error main
  600: "#AD4624",
  700: "#833418",
  800: "#59220F",
  900: "#2E1107",
};

// ─── Violet (Accent / Member avatars) ───────────────────────────────────────

const violet = {
  50: "#F0EBFB",
  100: "#E1D7F7",
  200: "#C3AFEF",
  300: "#B89AE8",
  400: "#AD86E2",
  500: "#9F77DD", // secondary accent
  600: "#7A52B8",
  700: "#5B3A8F",
  800: "#3D2566",
  900: "#1E123D",
};

// ─── Blue (Info) ─────────────────────────────────────────────────────────────

const blue = {
  50: "#DDEEFF",
  100: "#BBDCFF",
  200: "#85B7EB",
  300: "#6AA5E5",
  400: "#4F93DF",
  500: "#378ADD", // info main
  600: "#2570BE",
  700: "#185896",
  800: "#0E3F6E",
  900: "#072746",
};

// ─── Semantic tokens ─────────────────────────────────────────────────────────

const primary = {
  light: indigo[400],
  main: indigo[500],
  dark: indigo[600],
  contrastText: "#ffffff",
};

const secondary = {
  light: mint[400],
  main: mint[500],
  dark: mint[700],
  contrastText: "#ffffff",
};

const tertiary = {
  light: violet[400],
  main: violet[500],
  dark: violet[700],
  contrastText: "#ffffff",
};

const info = {
  light: blue[300],
  main: blue[500],
  dark: blue[700],
  contrastText: "#ffffff",
};

const success = {
  light: mint[300],
  main: mint[500],
  dark: mint[700],
  contrastText: "#ffffff",
};

const warning = {
  light: amber[300],
  main: amber[500],
  dark: amber[700],
  contrastText: surface[800],
};

const error = {
  light: red[300],
  main: red[500],
  dark: red[700],
  contrastText: "#ffffff",
};

const common = {
  black: "#000000",
  white: "#ffffff",
};

const action = {
  hover: alpha(indigo[500], 0.08),
  selected: alpha(indigo[500], 0.15),
  disabled: alpha(common.white, 0.28),
  disabledBackground: alpha(common.white, 0.1),
  focus: alpha(indigo[500], 0.18),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  secondary,
  tertiary,
  error,
  info,
  warning,
  success,
  common,
  grey,
  action,
};

// ─── Final palette (dark mode) ────────────────────────────────────────────────

const palette = {
  ...base,
  mode: "dark" as PaletteMode,

  text: {
    primary: common.white,
    secondary: "rgba(255, 255, 255, 0.55)",
    disabled: "rgba(255, 255, 255, 0.25)",
  },

  background: {
    default: surface[800], // #0C0D1C — page bg
    paper: surface[600], // #111225 — sidebar, cards, modals
    neutral: surface[500], // #13142A — canvas nodes, input bg
  },

  border: {
    default: surface[50],
  },

  divider: "rgba(255, 255, 255, 0.07)",

  action: {
    ...base.action,
    active: "rgba(255, 255, 255, 0.55)",
  },

  // custom surface scale — use via theme.palette.surface
  surface,

  // colour scales — use via theme.palette.indigo[400] etc.
  indigo,
  mint,
  amber,
  red,
  violet,
  blue,

  button: {
    primary,
    secondary: {
      light: "rgba(255, 255, 255, 0.08)",
      main: "rgba(255, 255, 255, 0.05)",
      dark: "rgba(255, 255, 255, 0.12)",
      contrastText: "rgba(255, 255, 255, 0.65)",
    },
  },
};

export default palette;
