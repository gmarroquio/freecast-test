import { expect, it } from "vitest";
import { unit } from "./unit";

it("should return unit symbol", () => {
  expect(unit("metric")).toBe("° C");
  expect(unit("imperial")).toBe("° F");
  expect(unit("standard")).toBe("K");
});
