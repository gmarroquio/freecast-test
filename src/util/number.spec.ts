import { expect, it } from "vitest";
import { getRandomInt, isBetween } from "./number";

it("should be between", () => {
  expect(isBetween(1, 0, 2)).toBe(true);
});

it("should return a number between 0 and 10", () => {
  expect(getRandomInt(0, 10))
    .to.greaterThanOrEqual(0)
    .and.to.lessThanOrEqual(10);
});
