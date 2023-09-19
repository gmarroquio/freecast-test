import { cities } from "../../constants/cities";
import { CityComponent } from "./City";
import { CitiesGrid } from "./styles";

export const Cities: React.FC = () => {
  return (
    <CitiesGrid>
      <CityComponent city={cities[0]} />
      <CityComponent city={cities[1]} />
      <CityComponent city={cities[2]} />
      <CityComponent city={cities[3]} />
      <CityComponent city={cities[4]} />
      <CityComponent city={cities[5]} />
      <CityComponent city={cities[6]} />
      <CityComponent city={cities[7]} />
      <CityComponent city={cities[8]} />
      <CityComponent city={cities[9]} />
      <CityComponent city={cities[10]} />
      <CityComponent city={cities[11]} />
      <CityComponent city={cities[12]} />
      <CityComponent city={cities[13]} />
      <CityComponent city={cities[14]} />
      <CityComponent city={cities[15]} />
      <CityComponent city={cities[16]} />
      <CityComponent city={cities[17]} />
    </CitiesGrid>
  );
};
