import { useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type HourType = "24h" | "am/pm";
type FormatOptions = { type: HourType; seconds: boolean };

type FormatTimeFunction = (
  date: Date,
  options: Partial<FormatOptions>,
) => string;

type TimeState = {
  time: string;
  seconds: boolean;
  type: HourType;
  setTime: (s: string) => void;
  changeConfig: (opt: Partial<FormatOptions>) => void;
};

const formatTimer: FormatTimeFunction = (
  date,
  { type = "24h", seconds = false },
) => {
  const common: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: seconds ? "2-digit" : undefined,
  };

  if (type === "24h") {
    return date.toLocaleTimeString(undefined, {
      hour12: false,
      ...common,
    });
  } else {
    return date.toLocaleTimeString(undefined, { hour12: true, ...common });
  }
};

const useTimeStore = create<TimeState>()(
  persist(
    (set) => ({
      type: "24h",
      seconds: false,
      time: formatTimer(new Date(), { type: "24h", seconds: false }),
      setTime: (time) => {
        set({ time });
      },
      changeConfig: (opt) => {
        set(() => opt);
      },
    }),
    { name: "time" },
  ),
);

export const useTime = () => {
  const { time, setTime, seconds, type, changeConfig } = useTimeStore();

  useEffect(() => {
    const timer = setInterval(
      () => setTime(formatTimer(new Date(), { type, seconds })),
      1000,
    );

    return () => {
      clearInterval(timer);
    };
  }, []);

  const set12HTime = () => changeConfig({ type: "am/pm" });
  const set24HTime = () => changeConfig({ type: "24h" });
  const toggleSeconds = () => changeConfig({ seconds: !seconds });

  return { time, set12HTime, set24HTime, toggleSeconds };
};
