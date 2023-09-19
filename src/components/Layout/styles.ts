import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.div`
  margin-left: 0.5rem;
`;

export const ThemeItem = styled(NavItem).attrs({ as: "button" })`
  margin-left: 2rem;
  background: transparent;
  border: none;
  font-size: 1rem;
  display: flex;
  align-items: center;

  & > svg {
    fill: white;
    width: 1rem;
    height: 1rem;
  }
`;
