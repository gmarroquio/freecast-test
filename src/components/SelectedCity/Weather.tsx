import { useWeather } from "../../hooks/useWeather";
import { WeatherIcon } from "./WeatherIcon";
import { CurrentContainer, CurrentLeftSide, CurrentRightSide } from "./styles";
import { useCityStore } from "../../hooks/useCity";
import { formatTime } from "../../util/time";
import { useCofig } from "../../hooks/useConfig";

export const Weather: React.FC<{
  type: "current" | "five-days";
}> = ({ type }) => {
  const { weather, isLoading } = useWeather();
  const { city } = useCityStore();
  const { seconds, hourType } = useCofig();

  if (isLoading) {
    return <div style={{ flex: 1 }}>Loading</div>;
  }

  if (!weather) return null;

  if (type === "current")
    return (
      <CurrentContainer>
        <CurrentLeftSide>
          <div>{city?.name}</div>
          <WeatherIcon id={weather.current.weather[0].id} time="day" />
          <div>{weather.current.weather[0].main}</div>
        </CurrentLeftSide>
        <CurrentRightSide>
          <div>Temp: {weather.current.temp} C</div>
          <div>Feels Like: {weather.current.feels_like} C</div>
          <div>Humidity: {weather.current.humidity} C</div>
          <div>
            Sunrise:{" "}
            {formatTime(
              new Date(
                (weather.current.sunrise + weather.timezone_offset) * 1000,
              ),
              { seconds, type: hourType },
            )}
          </div>
          <div>
            Sunset:{" "}
            {formatTime(
              new Date(
                (weather.current.sunset + weather.timezone_offset) * 1000,
              ),
              { seconds, type: hourType },
            )}
          </div>
        </CurrentRightSide>
      </CurrentContainer>
    );
  else if (type === "five-days")
    return (
      <div>
        {weather?.daily.slice(0, 5).map((d) => (
          <div key={d.dt}>
            <div>{new Date(d.dt * 1000).toString()}</div>
            <div>
              H: {d.temp.max} C / L: {d.temp.min} C
            </div>
          </div>
        ))}
      </div>
    );
};
