import { api } from "./api";

type WeatherProp = {
  id: number;
  icon: string;
  main: string;
};

type WeatherResponse = {
  timezone_offset: number;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    humidity: string;
    feels_like: string;
    temp: string;
    weather: WeatherProp[];
  };
  daily: {
    dt: number;
    temp: {
      min: string;
      max: string;
    };
    weather: WeatherProp[];
  }[];
};

export const getWeather = async ({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}) => {
  const { data } = await api.get<WeatherResponse>("data/2.5/onecall?", {
    params: { lat, lon, exclude: "minutely,hourly,alerts", units: "metric" },
  });

  return data;
};
