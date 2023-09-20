import { Outlet } from "react-router-dom";
import { Time } from "../Time";
import { NavButton, NavBar, ThemeButton } from "./styles";
import ThemeIcon from "../../assets/theme-switch.svg";
import { Cities } from "../Cities";
import { useConfig } from "../../hooks/useConfig";
import { Modal } from "../Modal";
import { useState } from "react";

export const Layout: React.FC = () => {
  const { toggleTheme } = useConfig();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={isOpen}
        title="settings"
        handleClose={() => setIsOpen(false)}
      />
      <NavBar>
        <div>
          <Time />
        </div>
        <div style={{ display: "flex" }}>
          <NavButton>Search</NavButton>
          <NavButton onClick={() => setIsOpen(true)}>Setting</NavButton>
          <ThemeButton onClick={toggleTheme}>
            <ThemeIcon />
          </ThemeButton>
        </div>
      </NavBar>

      <Outlet />
      <Cities />
    </>
  );
};
