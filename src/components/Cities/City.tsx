import { CityType, useCityStore } from "../../hooks/useCity";
import { City } from "./styles";

export const CityComponent: React.FC<{ city: CityType }> = ({ city }) => {
  const { setCity, city: selected } = useCityStore();
  return (
    <City
      $selected={city.name === selected?.name}
      onClick={() => setCity(city)}
    >
      {city.name}
    </City>
  );
};
