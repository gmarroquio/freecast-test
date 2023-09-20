import { UnitType } from "../hooks/useConfig";
import { api } from "./api";

type WeatherProp = {
  id: number;
  icon: string;
  main: string;
};

type WeatherResponse = {
  timezone_offset: number;
  timezone: string;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    humidity: number;
    feels_like: number;
    temp: string;
    weather: WeatherProp[];
  };
  daily: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: {
      min: number;
      max: number;
    };
    weather: WeatherProp[];
  }[];
};

export const getWeather = async ({
  lat,
  lon,
  units,
}: {
  lat: number;
  lon: number;
  units: UnitType;
}) => {
  const { data } = await api.get<WeatherResponse>("data/2.5/onecall?", {
    params: { lat, lon, exclude: "minutely,hourly,alerts", units },
  });

  return data;
};
