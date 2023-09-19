import { Link } from "react-router-dom";
import { useCityStore } from "../../hooks/useCity";
import { Weather } from "./Wather";
import { PickMessage, WeaterContainer } from "./styles";

export const SelectedCity: React.FC<{
  type: "current" | "five-days";
}> = ({ type }) => {
  const { city } = useCityStore();
  return (
    <WeaterContainer>
      {city ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Weather type={type} />
          <Link to="/">Current</Link>
          <Link to="/5days">5Days</Link>
        </div>
      ) : (
        <PickMessage>Pick a city to see the full forecast</PickMessage>
      )}
    </WeaterContainer>
  );
};
