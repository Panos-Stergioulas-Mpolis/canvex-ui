import palette from "../palette";

describe("Custom Theme Palette", () => {
  it("should define grey color values correctly", () => {
    expect(palette.grey).toEqual({
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
    });
  });

  it("should define primary colors correctly", () => {
    expect(palette.primary).toEqual({
      light: "#7B8FFB",
      main: "#5B6CF8",
      dark: "#3A4AD4",
      contrastText: "#ffffff",
    });
  });

  it("should define secondary colors correctly", () => {
    expect(palette.secondary).toEqual({
      light: "#56D4A3",
      main: "#1D9E75",
      dark: "#11624A",
      contrastText: "#ffffff",
    });
  });

  it("should define error colors correctly", () => {
    expect(palette.error).toEqual({
      light: "#EE7E61",
      main: "#D85A30",
      dark: "#833418",
      contrastText: "#ffffff",
    });
  });

  it("should have a defined mode", () => {
    expect(palette.mode).toBe("dark");
  });
});
