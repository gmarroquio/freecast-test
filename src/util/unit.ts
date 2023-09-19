export const unit = (units: "metric" | "imperial" | "standard") => {
  if (units === "metric") return "° C";
  else if (units === "imperial") return "° F";
  return "K";
};
