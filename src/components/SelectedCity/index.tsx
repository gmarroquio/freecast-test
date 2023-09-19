import { useCityStore } from "../../hooks/useCity";
import { Weather } from "./Weather";
import {
  ForecastContainer,
  ForecastLink,
  ForecastLinkContainer,
  InfoContainer,
  PickMessage,
  WeatherContainer,
} from "./styles";

export const SelectedCity: React.FC<{
  type: "current" | "five-days";
}> = ({ type }) => {
  const { city } = useCityStore();
  return (
    <InfoContainer>
      {city ? (
        <WeatherContainer>
          <Weather type={type} />
          <ForecastContainer>
            <div style={{ marginBottom: "0.5rem" }}>Forecast</div>
            <ForecastLinkContainer>
              <ForecastLink to="/">Current</ForecastLink>
              <ForecastLink to="/5days">5 Days</ForecastLink>
            </ForecastLinkContainer>
          </ForecastContainer>
        </WeatherContainer>
      ) : (
        <PickMessage>Pick a city to see the full forecast</PickMessage>
      )}
    </InfoContainer>
  );
};
