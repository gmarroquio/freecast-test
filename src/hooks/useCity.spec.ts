import { beforeEach, describe, expect, it } from "vitest";
import { renderHook, act, cleanup } from "@testing-library/react";
import { useCity } from "./useCity";

describe("useCity", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should initialize city hook", () => {
    const { result } = renderHook(useCity);

    expect(result.current.city).toBeUndefined();
    expect(result.current.cities?.length).toBe(18);
  });

  it("should select city", () => {
    const { result, unmount } = renderHook(() => useCity());

    expect(result.current.city).toBeUndefined();
    expect(result.current.cities).toBeDefined();
    act(() => {
      result.current.setCity(result.current.cities![0]);
    });
    expect(result.current.city).toBeDefined();
    unmount();
  });

  it("should search city", () => {
    const { result } = renderHook(() => useCity());

    expect(result.current.cities).toBeDefined();
    act(() => {
      result.current.searchCity(result.current.cities![0].name.slice(0, 3));
    });
    expect(result.current.cities?.length).toBeLessThan(18);
    act(() => {
      result.current.searchCity("");
    });
    expect(result.current.cities?.length).toBe(18);
  });
});
