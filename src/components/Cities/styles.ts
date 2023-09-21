import styled from "styled-components";
import { colors } from "../../sytle/theme";

export const CitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 0.75rem;
  grid-column-gap: 0.75rem;
`;

export const City = styled.button.attrs<{
  $selected: boolean;
  $bg?: string;
  $fg?: string;
}>((props) => ({
  $bg: props.$selected ? colors.white : colors.black,
  $fg: props.$selected ? colors.blue : colors.white,
}))`
  border: 1px solid ${colors.blue};
  border-radius: 0.25rem;
  background: ${(props) => props.$bg};
  color: ${(props) => props.$fg};
  padding: 0.75rem 0.25rem;
  transition: 200ms;
  text-transform: capitalize;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;
