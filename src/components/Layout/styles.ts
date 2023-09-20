import styled from "styled-components";
import { colors } from "../../sytle/theme";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavButton = styled.button`
  margin-left: 0.5rem;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
`;

export const ThemeButton = styled(NavButton)`
  margin-left: 2rem;

  & > svg {
    fill: ${colors.white};
    width: 1rem;
    height: 1rem;
  }
`;
