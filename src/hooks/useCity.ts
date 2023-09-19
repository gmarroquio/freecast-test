import { create } from "zustand";
import { cities } from "../constants/cities";

export type CityType = { name: string; lat: number; lon: number };

type TimeState = {
  city: CityType | undefined;
  cities: CityType[];
  setCity: (s: CityType) => void;
};

export const useCityStore = create<TimeState>((set) => ({
  city: undefined,
  cities: cities,
  setCity: (city) => {
    set({ city });
  },
}));
