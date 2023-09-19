import { useTime } from "./hook";
import { TimeContainer } from "./styles";

export const Time: React.FC = () => {
  const { time } = useTime();
  return <TimeContainer>{time}</TimeContainer>;
};
