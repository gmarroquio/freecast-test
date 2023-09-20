import styled from "styled-components";
import { colors } from "../../sytle/theme";
import { Link } from "react-router-dom";

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

export const PickMessage = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;

export const WeatherIconContainer = styled.div.attrs<{
  $time: "day" | "night";
  $id: number;
  $color?: string;
}>((props) => ({
  $color:
    props.$time === "day" && props.$id >= 800 && props.$id < 803
      ? colors.yellow
      : colors.blue,
}))`
  & > svg {
    fill: ${(props) => props.$color};
    filter: drop-shadow(0 0 0.75rem ${(props) => props.$color});
    width: 7rem;
    height: 7rem;
  }
`;

export const ForecastContainer = styled.div`
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ForecastLinkContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
`;

export const ForecastLink = styled(Link).attrs<{
  $selected: boolean;
  $bg?: string;
  $fg?: string;
}>((props) => ({
  $bg: props.$selected ? colors.white : colors.black,
  $fg: props.$selected ? colors.blue : colors.white,
}))`
  border: 1px solid ${colors.blue};
  border-radius: 0.4rem;
  text-align: center;
  padding: 0.1rem 1rem;
  background: ${(props) => props.$bg};
  color: ${(props) => props.$fg};
`;

export const CurrentContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  margin: 0 auto;
`;

export const CurrentLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CurrentRightSide = styled.div`
  margin-left: 1.5rem;
`;
