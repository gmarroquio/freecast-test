import Unknown from "../../assets/unknown.svg";
import Fog from "../../assets/weather-fog.svg"; //741
import Hail from "../../assets/weather-hail.svg";
import ClearDay from "../../assets/weather-clear.svg"; //800
import ClearNight from "../../assets/weather-night.svg"; //800
import Snowy from "../../assets/weather-snowy.svg";
import Windy from "../../assets/weather-windy.svg";
import Cloudy from "../../assets/weather-cloudy.svg";
import Pouring from "../../assets/weather-pouring.svg";
import Lightning from "../../assets/weather-lightning.svg";
import SnowyHeavy from "../../assets/weather-snowy-heavy.svg";
import SnowyRainy from "../../assets/weather-snowy-rainy.svg";
import PartlyCloudy from "../../assets/weather-partly-cloudy.svg";
import WindyVariant from "../../assets/weather-windy-variant.svg";
import LightningRainy from "../../assets/weather-lightning-rainy.svg";

import { WeatherIconContainer } from "./styles";

const SelectIcon = ({ id, time }: { id: number; time: "day" | "night" }) => {
  switch (id) {
    case 200:
    case 201:
    case 202:
    case 230:
    case 231:
    case 232:
      return <LightningRainy />;
    case 210:
    case 211:
    case 221:
      return <Lightning />;
    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
    case 520:
    case 521:
    case 522:
    case 531:
      return <Pouring />;
    case 511:
    case 612:
    case 613:
      return <Hail />;
    case 600:
    case 601:
      return <Snowy />;
    case 602:
    case 611:
      return <SnowyHeavy />;
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      return <SnowyRainy />;
    case 701:
    case 711:
    case 721:
    case 731:
    case 741:
    case 751:
    case 761:
    case 762:
      return <Fog />;
    case 771:
      return <Windy />;
    case 781:
      return <WindyVariant />;
    case 800:
      return time === "day" ? <ClearDay /> : <ClearNight />;
    case 801:
    case 802:
      return <PartlyCloudy />;
    case 803:
    case 804:
      return <Cloudy />;
    default:
      return <Unknown />;
  }
};

export const WeatherIcon: React.FC<{ id: number; time: "day" | "night" }> = ({
  id,
  time,
}) => {
  return (
    <WeatherIconContainer $id={id} $time={time}>
      <SelectIcon id={id} time={time} />
    </WeatherIconContainer>
  );
};
