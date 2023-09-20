type HourType = "24h" | "am/pm";

type FormatOptions = {
  type: HourType;
  seconds: boolean;
  timezone?: string;
};
type FormatTimeFunction = (
  date: Date,
  options: Partial<FormatOptions>,
) => string;

export const formatTime: FormatTimeFunction = (
  date,
  { type = "24h", seconds = false, timezone = undefined },
) => {
  const common: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: seconds ? "2-digit" : undefined,
    timeZone: timezone,
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

export const getWeek = (date: Date) => {
  return date.toLocaleString("en-us", { weekday: "short" });
};
