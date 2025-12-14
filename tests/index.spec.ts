import { it, describe, expect } from "vitest";
import theme from "../src/theme";

describe("theme", () => {
  it("has metadata", () => {
    expect(theme.meta.name).toBe("Regenesis");
  });

  it("can generate tailwind classes", () => {
    const result = theme();
    expect(result.tailwind).toBeDefined();
    const classes = result.tailwind();
    expect(classes).toBeDefined();
  });

  it("can generate editor controls without error", () => {
    const result = theme();
    expect(result.editorControls).toBeDefined();
    // This is where the "rounded not in scale" error occurs
    const controls = result.editorControls();
    expect(controls).toBeDefined();
  });
});
