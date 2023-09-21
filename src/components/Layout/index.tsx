import { Outlet } from "react-router-dom";
import { Time } from "../Time";
import { NavButton, NavBar, ThemeButton, NavSearch } from "./styles";
import ThemeIcon from "../../assets/theme-switch.svg";
import { Cities } from "../Cities";
import { useConfig } from "../../hooks/useConfig";
import { Modal } from "../Modal";
import { useRef, useState } from "react";
import { useCity } from "../../hooks/useCity";
import CloseCircle from "../../assets/close-circle.svg";

export const Layout: React.FC = () => {
  const { toggleTheme } = useConfig();
  const { searchCity } = useCity();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e: any) => {
    searchCity(e.target.value);
  };

  const handleCleanSearch = () => {
    if (inputRef.current) inputRef.current.value = "";
    searchCity("");
  };

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
          <NavSearch>
            <input
              ref={inputRef}
              placeholder="Search"
              onChange={handleSearch}
            />
            <button onClick={handleCleanSearch}>
              <CloseCircle />
            </button>
          </NavSearch>
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
