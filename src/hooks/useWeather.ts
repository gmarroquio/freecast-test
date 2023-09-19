import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../services/get-weader";
import { useCityStore } from "./useCity";

export const useWeather = () => {
  const { city } = useCityStore();
  const { data, isLoading } = useQuery(
    ["city-weather", city?.name],
    () => {
      return getWeather({
        lat: city!.lat,
        lon: city!.lon,
      });
    },
    {
      enabled: !!city,
    },
  );

  return { weather: data, isLoading: isLoading };
};
