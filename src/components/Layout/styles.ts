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

export const NavSearch = styled(NavButton).attrs({ as: "div" })`
  margin-left: 0.5rem;
  background: transparent;
  border: 1px solid ${colors.blue};
  padding: 0.25rem 0.25rem;
  border-radius: 0.4rem;

  & > input {
    background: transparent;
    border: none;
  }

  & > button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    & > svg {
      fill: ${colors.white};
    }
  }
`;
