import React, { createContext, useContext, useMemo, useState } from "react";
import type { MealCard } from "./Cards";

type CartItem = {
  meal: MealCard;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  add: (meal: MealCard) => void;
  increment: (mealId: string) => void;
  decrement: (mealId: string) => void;
  getQuantity: (mealId: string) => number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = (meal: MealCard) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.meal.id === meal.id);
      if (existing) {
        return prev.map((i) =>
          i.meal.id === meal.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { meal, quantity: 1 }];
    });
  };

  const increment = (mealId: string) => {
    setItems((prev) =>
      prev.map((i) =>
        i.meal.id === mealId ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const decrement = (mealId: string) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.meal.id === mealId ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const getQuantity = (mealId: string) => {
    const found = items.find((i) => i.meal.id === mealId);
    return found ? found.quantity : 0;
  };

  const value = useMemo(
    () => ({ items, add, increment, decrement, getQuantity }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
