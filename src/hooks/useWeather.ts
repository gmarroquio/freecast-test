import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../services/get-weather";
import { useCity } from "./useCity";
import { useConfig } from "./useConfig";

export const useWeather = () => {
  const { city } = useCity();
  const { units } = useConfig();
  const { data, isLoading } = useQuery(
    ["city-weather", city?.name, units],
    () => {
      return getWeather({
        lat: city!.lat,
        lon: city!.lon,
        units,
      });
    },
    {
      enabled: !!city,
    },
  );

  return { weather: data, isLoading: isLoading };
};
