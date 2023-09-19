import { Outlet } from "react-router-dom";
import { Time } from "../Time";
import { useThemeStore } from "../../hooks/theme";
import { NavItem, ThemeItem, NavBar } from "./styles";
import ThemeIcon from "../../assets/theme-switch.svg";
import { Cities } from "../Cities";

export const Layout: React.FC = () => {
  const { changeTheme, theme } = useThemeStore();

  function handleTheme() {
    if (theme === "dark") changeTheme("light");
    else if (theme === "light") changeTheme("dark");
  }

  return (
    <>
      <NavBar>
        <div>
          <Time />
        </div>
        <div style={{ display: "flex" }}>
          <NavItem>Search</NavItem>
          <NavItem>Setting</NavItem>
          <ThemeItem onClick={handleTheme}>
            <ThemeIcon />
          </ThemeItem>
        </div>
      </NavBar>

      <Outlet />
      <Cities />
    </>
  );
};
