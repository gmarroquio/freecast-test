import { useWeather } from "../../hooks/useWeather";
import { WeatherIcon } from "./WeatherIcon";
import {
  CurrentContainer,
  CurrentLeftSide,
  CurrentRightSide,
  FiveDaysContainer,
  FiveDaysWeatherCell,
  FiveDaysWeatherGrid,
} from "./styles";
import { useCityStore } from "../../hooks/useCity";
import { formatTime, getWeek } from "../../util/time";
import { useConfig } from "../../hooks/useConfig";
import { isBetween } from "../../util/number";
import { unit } from "../../util/unit";
import { Loading } from "../Loading";

export const Weather: React.FC<{
  type: "current" | "five-days";
}> = ({ type }) => {
  const { weather, isLoading } = useWeather();
  const { city } = useCityStore();
  const { seconds, hourType, units } = useConfig();

  if (isLoading) {
    return <Loading />;
  }

  if (!weather) return null;

  if (type === "current")
    return (
      <CurrentContainer>
        <CurrentLeftSide>
          <div>{city?.name}</div>
          <WeatherIcon
            id={weather.current.weather[0].id}
            time={
              isBetween(
                weather.current.dt,
                weather.current.sunrise,
                weather.current.sunset,
              )
                ? "day"
                : "night"
            }
          />
          <div>{weather.current.weather[0].main}</div>
        </CurrentLeftSide>
        <CurrentRightSide>
          <div>
            Temp: {weather.current.temp} {unit(units)}
          </div>
          <div>
            Feels Like: {weather.current.feels_like} {unit(units)}
          </div>
          <div>Humidity: {weather.current.humidity} %</div>
          <div>
            Sunrise:{" "}
            {formatTime(new Date(weather.current.sunrise * 1000), {
              seconds,
              type: hourType,
              timezone: weather.timezone,
            })}
          </div>
          <div>
            Sunset:{" "}
            {formatTime(new Date(weather.current.sunset * 1000), {
              seconds,
              type: hourType,
            })}
          </div>
        </CurrentRightSide>
      </CurrentContainer>
    );
  else if (type === "five-days")
    return (
      <FiveDaysContainer>
        <div style={{ marginBottom: "1rem" }}>{city?.name}</div>
        <FiveDaysWeatherGrid>
          {weather?.daily.slice(1, 6).map((d) => (
            <FiveDaysWeatherCell>
              <div>{getWeek(new Date(d.dt * 1000))}</div>
              <WeatherIcon
                id={d.weather[0].id}
                time={isBetween(d.dt, d.sunrise, d.sunset) ? "day" : "night"}
              />
              <div>{d.weather[0].main}</div>
              <div>
                H: {d.temp.max} {unit(units)} / L: {d.temp.min} {unit(units)}
              </div>
            </FiveDaysWeatherCell>
          ))}
        </FiveDaysWeatherGrid>
      </FiveDaysContainer>
    );
};
