import { create } from "zustand";
import { persist } from "zustand/middleware";

export type HourType = "24h" | "am/pm";
export type UnitType = "metric" | "imperial" | "standard";

export type ConfigOptions = {
  hourType: HourType;
  seconds: boolean;
  theme: "dark" | "light";
  units: UnitType;
};

export type ConfigState = ConfigOptions & {
  changeConfig: (opt: Partial<ConfigOptions>) => void;
};

const useConfigStore = create<ConfigState>()(
  persist(
    (set) => ({
      hourType: "24h",
      seconds: false,
      theme: "dark",
      units: "metric",
      changeConfig: (opt) => set(opt),
    }),
    { name: "weather-config" },
  ),
);

export const useConfig = () => {
  const { hourType, seconds, theme, units, changeConfig } = useConfigStore();

  const toggleTheme = () => {
    if (theme === "dark") changeConfig({ theme: "light" });
    else if (theme === "light") changeConfig({ theme: "dark" });
  };

  const toggleSeconds = () => changeConfig({ seconds: !seconds });

  return {
    hourType,
    seconds,
    theme,
    units,
    toggleTheme,
    toggleSeconds,
    changeConfig,
  };
};
