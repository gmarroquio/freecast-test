import { beforeEach, describe, expect, it } from "vitest";
import { renderHook, act, cleanup } from "@testing-library/react";
import { useConfig } from "./useConfig";

describe("useConfig", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should initialize config hook", () => {
    const { result } = renderHook(() => useConfig());
    expect(result.current.units).toBeDefined();
    expect(result.current.hourType).toBeDefined();
  });

  it("should change config", () => {
    const { result } = renderHook(() => useConfig());
    act(() => {
      result.current.changeConfig({ hourType: "am/pm", units: "imperial" });
    });

    expect(result.current.units).toBe("imperial");
    expect(result.current.hourType).toBe("am/pm");
  });

  it("should toggle theme", () => {
    const { result } = renderHook(() => useConfig());
    const initialTheme = result.current.theme;
    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).not.toBe(initialTheme);

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe(initialTheme);
  });
});
