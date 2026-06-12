import breakpoints from "../breakpoints";

describe("Custom Theme Breakpoints", () => {
  it("should have defined breakpoints", () => {
    expect(breakpoints.values).toHaveProperty("xs");
    expect(breakpoints.values).toHaveProperty("sm");
    expect(breakpoints.values).toHaveProperty("md");
    expect(breakpoints.values).toHaveProperty("lg");
    expect(breakpoints.values).toHaveProperty("xl");
  });

  it("should have the correct breakpoint values", () => {
    const values = breakpoints.values!;

    expect(values.xs).toBe(0);
    expect(values.sm).toBe(600);
    expect(values.md).toBe(1000);
    expect(values.lg).toBe(1200);
    expect(values.xl).toBe(1536);
  });
});
