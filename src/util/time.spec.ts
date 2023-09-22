import { expect, it } from "vitest";
import { formatTime, getWeek } from "./time";

it("should format date", () => {
  const date = new Date(2023, 10, 10, 14);
  expect(formatTime(date, {})).toBe("14:00");
  expect(formatTime(date, { type: "am/pm" })).toBe("02:00 PM");
  expect(formatTime(date, { seconds: true })).toBe("14:00:00");
});

it("should return week day", () => {
  const date = new Date(2023, 10, 10, 14);
  const date2 = new Date(2023, 10, 11, 14);
  expect(getWeek(date)).toBe("Fri");
  expect(getWeek(date2)).toBe("Sat");
});
