import React, { createContext, useContext, useMemo, useState } from "react";
import type { MealCard } from "./Cards";

type FavoriteContextValue = {
  favorites: MealCard[];
  toggle: (meal: MealCard) => void;
  isFavorite: (mealId: string) => boolean;
};

const FavoriteContext = createContext<FavoriteContextValue | null>(null);

export function FavoriteProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<MealCard[]>([]);

  const toggle = (meal: MealCard) => {
    setFavorites((prev) => {
      const exists = prev.some((f) => f.id === meal.id);
      if (exists) {
        return prev.filter((f) => f.id !== meal.id);
      }
      return [...prev, meal];
    });
  };

  const isFavorite = (mealId: string) =>
    favorites.some((f) => f.id === mealId);

  const value = useMemo(
    () => ({ favorites, toggle, isFavorite }),
    [favorites]
  );

  return (
    <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
  );
}

export function useFavorite() {
  const ctx = useContext(FavoriteContext);
  if (!ctx) {
    throw new Error("useFavorite must be used within FavoriteProvider");
  }
  return ctx;
}
