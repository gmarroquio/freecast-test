import { expect, it, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTime } from "./hook";
import { useConfig } from "../../hooks/useConfig";

vi.useFakeTimers({ now: 1695361440000 });

it("should initialize weather hook", async () => {
  const { result: configHook } = renderHook(useConfig);
  const { result: timeHook, rerender } = renderHook(useTime);

  expect(timeHook.current.time).toBe("02:44");

  act(() => {
    configHook.current.changeConfig({ hourType: "am/pm" });
  });

  vi.advanceTimersByTime(60 * 1000);

  rerender();

  expect(timeHook.current.time).toBe("02:45 AM");
});
