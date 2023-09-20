import { UnitType } from "../hooks/useConfig";

export const unit = (units: UnitType) => {
  if (units === "metric") return "° C";
  else if (units === "imperial") return "° F";
  return "K";
};
