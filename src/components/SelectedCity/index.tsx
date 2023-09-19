import { useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();
  return (
    <InfoContainer>
      {city ? (
        <WeatherContainer>
          <Weather type={type} />
          <ForecastContainer>
            <div style={{ marginBottom: "0.5rem" }}>Forecast</div>
            <ForecastLinkContainer>
              <ForecastLink $selected={pathname === "/"} to="/">
                Now
              </ForecastLink>
              <ForecastLink $selected={pathname === "/5days"} to="/5days">
                5 Days
              </ForecastLink>
            </ForecastLinkContainer>
          </ForecastContainer>
        </WeatherContainer>
      ) : (
        <PickMessage>Pick a city to see the full forecast</PickMessage>
      )}
    </InfoContainer>
  );
};
