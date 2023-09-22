import { useEffect } from "react";
import { create } from "zustand";
import { formatTime } from "../../util/time";
import { useConfig } from "../../hooks/useConfig";

type TimeState = {
  time: string;
  setTime: (s: string) => void;
};

const useTimeStore = create<TimeState>((set) => ({
  time: formatTime(new Date(), { type: "24h" }),
  setTime: (time) => {
    set({ time });
  },
}));

export const useTime = () => {
  const { time, setTime } = useTimeStore();
  const { hourType } = useConfig();

  useEffect(() => {
    setTime(formatTime(new Date(), { type: hourType }));

    const timer = setInterval(
      () => setTime(formatTime(new Date(), { type: hourType })),
      1000,
    );
    return () => {
      clearInterval(timer);
    };
  }, [hourType, setTime]);

  return {
    time,
  };
};
