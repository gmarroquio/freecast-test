import { useCity } from "../../hooks/useCity";
import { Loading } from "../Loading";
import { CityComponent } from "./City";
import { CitiesGrid } from "./styles";

export const Cities: React.FC = () => {
  const { cities } = useCity();
  if (!cities) return <Loading />;
  return (
    <CitiesGrid>
      {cities.map((city) => (
        <CityComponent key={city.name} city={city} />
      ))}
    </CitiesGrid>
  );
};
