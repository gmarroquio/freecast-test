import { create } from "zustand";
import { persist } from "zustand/middleware";

type HourType = "24h" | "am/pm";

type ConfigOptions = {
  hourType: HourType;
  seconds: boolean;
  theme: "dark" | "light";
  units: "metric" | "imperial" | "standard";
};

type ConfigState = ConfigOptions & {
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

export const useCofig = () => {
  const { hourType, seconds, theme, units, changeConfig } = useConfigStore();

  const setMetric = () => changeConfig({ units: "metric" });
  const setImperial = () => changeConfig({ units: "imperial" });
  const setStandard = () => changeConfig({ units: "standard" });

  const set12H = () => changeConfig({ hourType: "am/pm" });
  const set24H = () => changeConfig({ hourType: "24h" });

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
    setMetric,
    setImperial,
    setStandard,
    set12H,
    set24H,
    toggleTheme,
    toggleSeconds,
  };
};
