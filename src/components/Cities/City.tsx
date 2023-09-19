import { CityType, useCityStore } from "../../hooks/useCity";
import { City } from "./styles";

export const CityComponent: React.FC<{ city: CityType }> = ({ city }) => {
  const { setCity } = useCityStore();
  return <City onClick={() => setCity(city)}>{city.name}</City>;
};
