import { it, vi, expect } from "vitest";
import { api } from "./api";
import { getWeather } from "./get-weather";

it("should get weather response", async () => {
  const getCall = vi
    .spyOn(api, "get")
    .mockResolvedValue({ data: { message: "response" } });
  const response = await getWeather({ lat: 1, lon: 2, units: "metric" });
  expect(getCall.mock.calls.length).toBe(1);
  expect(getCall.mock.lastCall![0]).to.equal("data/2.5/onecall");
  expect(JSON.stringify(getCall.mock.lastCall![1])).to.equal(
    JSON.stringify({
      params: {
        lat: 1,
        lon: 2,
        exclude: "minutely,hourly,alerts",
        units: "metric",
      },
    }),
  );
  expect(JSON.stringify(response)).to.equal(
    JSON.stringify({ message: "response" }),
  );
});
