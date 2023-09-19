import styled from "styled-components";
import { colors } from "../../sytle/theme";

export const CitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 0.75rem;
  grid-column-gap: 0.75rem;
`;

export const City = styled.button`
  border: 1px solid ${colors.blue};
  border-radius: 0.25rem;
  background: transparent;
  padding: 1rem 0.5rem;
  transition: 200ms;
  text-transform: capitalize;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;
