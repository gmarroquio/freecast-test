import { api } from "./api";

type WeatherResponse = {
  current: {
    dt: number;
    sunrise: string;
    sunset: string;
    humidity: string;
    feels_like: string;
    temp: string;
    weather: {
      id: number;
      icon: string;
    };
  };
  daily: {
    dt: number;
    temp: {
      min: string;
      max: string;
    };
    weather: {
      id: number;
      icon: string;
    };
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
