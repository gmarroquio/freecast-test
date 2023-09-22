import { expect, it, vi } from "vitest";
import { renderHook, act, waitFor } from "@testing-library/react";
import { useWeather } from "./useWeather";
import { api } from "../services/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCity } from "./useCity";
import { useConfig } from "./useConfig";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 10000,
    },
  },
});

it("should initialize weather hook", async () => {
  const getCall = vi
    .spyOn(api, "get")
    .mockResolvedValue({ data: { message: "response" } });
  const { result: cityHook } = renderHook(useCity);

  const { result: configHook } = renderHook(useConfig);

  const { result } = renderHook(useWeather, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    ),
  });

  act(() => {
    cityHook.current.setCity(cityHook.current.cities![0]);
  });

  await waitFor(() => expect(result.current.isLoading).toBe(false));

  expect(JSON.stringify(getCall.mock.lastCall![1])).toBe(
    JSON.stringify({
      params: {
        lat: cityHook.current.city?.lat,
        lon: cityHook.current.city?.lon,
        exclude: "minutely,hourly,alerts",
        units: configHook.current.units,
      },
    }),
  );

  act(() => {
    cityHook.current.setCity(cityHook.current.cities![1]);
    configHook.current.changeConfig({ units: "imperial" });
  });

  await waitFor(() => expect(result.current.isLoading).toBe(false));

  expect(JSON.stringify(getCall.mock.lastCall![1])).toBe(
    JSON.stringify({
      params: {
        lat: cityHook.current.city?.lat,
        lon: cityHook.current.city?.lon,
        exclude: "minutely,hourly,alerts",
        units: configHook.current.units,
      },
    }),
  );
});
