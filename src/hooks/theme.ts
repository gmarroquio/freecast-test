import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "dark" | "light";
type ThemeState = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "dark",
      changeTheme: (theme) => set({ theme }),
    }),
    { name: "theme" },
  ),
);
