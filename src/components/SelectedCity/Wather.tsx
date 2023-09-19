import { useWeather } from "../../hooks/useWeather";

export const Weather: React.FC<{
  type: "current" | "five-days";
}> = ({ type }) => {
  const { weather, isLoading } = useWeather();
  if (isLoading) {
    return <div>Loading</div>;
  }

  if (type === "current") return <div>{weather?.current.temp} C</div>;
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
