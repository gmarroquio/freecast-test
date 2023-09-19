import { useEffect, useRef } from "react";
import { create } from "zustand";
import { formatTime } from "../../util/time";
import { useCofig } from "../../hooks/useConfig";

type TimeState = {
  time: string;
  setTime: (s: string) => void;
};

const useTimeStore = create<TimeState>()((set) => ({
  time: formatTime(new Date(), { type: "24h", seconds: true }),
  setTime: (time) => {
    set({ time });
  },
}));

export const useTime = () => {
  const { time, setTime } = useTimeStore();
  const { hourType, seconds } = useCofig();
  const timeRef = useRef<any>(null);

  useEffect(() => {
    timeRef.current = setInterval(
      () => setTime(formatTime(new Date(), { type: hourType, seconds })),
      1000,
    );
    return () => {
      clearInterval(timeRef.current);
    };
  }, []);

  return {
    time,
  };
};
