import { create } from "zustand";
import { cities as CITIES } from "../constants/cities";
import { useEffect, useState } from "react";
import { getRandomInt } from "../util/number";

export type CityType = { name: string; lat: number; lon: number };

type TimeState = {
  city: CityType | undefined;
  cities: CityType[] | undefined;
  setCity: (s: CityType) => void;
  setCities: (s: CityType[]) => void;
};

export const useCityStore = create<TimeState>((set) => ({
  city: undefined,
  cities: undefined,
  setCity: (city) => {
    set({ city });
  },
  setCities: (cities) => set({ cities }),
}));

export const useCity = () => {
  const { cities, city, setCity, setCities } = useCityStore();
  const [original, setOriginal] = useState<CityType[] | undefined>(undefined);

  useEffect(() => {
    const sessionData = sessionStorage.getItem("cities");
    if (sessionData) {
      const parsed = JSON.parse(sessionData);
      setCities(parsed);
      setOriginal(parsed);
    } else {
      const citiesMap = new Map<number, CityType>();
      const citiesList: CityType[] = [];
      while (citiesMap.size < 18) {
        const index = getRandomInt(0, CITIES.length);
        citiesMap.set(index, CITIES[index]);
      }
      for (const newCity of citiesMap.entries()) {
        citiesList.push(newCity[1]);
      }

      setCities(citiesList);
      setOriginal(citiesList);
      sessionStorage.setItem("cities", JSON.stringify(citiesList));
    }
  }, []);

  const searchCity = (s: string) => {
    if (original) {
      if (s.length > 0)
        setCities(
          original.filter((city) =>
            city.name.toLowerCase().includes(s.toLowerCase()),
          ),
        );
      else {
        setCities(original);
      }
    }
  };

  return { city, setCity, cities, searchCity };
};
