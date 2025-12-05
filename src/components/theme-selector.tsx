// src/components/theme-selector.tsx
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { Uniwind, useUniwind } from "uniwind";

// THEME VARIANTS
const OPTIONS = [
  "light",
  "dark",
  "og",
  "blue",
  "navy",
  "red",
  "orange",
  "rosy",
] as const;

type Option = (typeof OPTIONS)[number];

// Kichik rang previewlar (har bir variant uchun 3 ta rang)
const THEME_COLORS: Record<Option, [string, string, string]> = {
  light: ["bg-primary", "bg-chip", "bg-foreground/40"],
  dark: ["bg-primary", "bg-card-strong", "bg-foreground/60"],
  og: ["bg-primary", "bg-lemon", "bg-foreground/40"],
  blue: ["bg-primary", "bg-neonlite-200", "bg-foreground/30"],
  navy: ["bg-primary", "bg-lemon", "bg-foreground/30"],
  red: ["bg-primary", "bg-neon", "bg-foreground/30"],
  orange: ["bg-primary", "bg-neonlite", "bg-foreground/40"],
  rosy: ["bg-primary", "bg-neonlite-200", "bg-foreground/40"],
};

export function ThemeSelectorComponent() {
  const { theme, hasAdaptiveThemes } = useUniwind();

  const active: Option = hasAdaptiveThemes ? "light" : theme;

  return (
    <View className="gap-3">
      <Text className="text-lg font-bold text-primary mt-2">Themes</Text>

      <FlatList
        horizontal
        data={OPTIONS}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <View className="w-3" />}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const colors = THEME_COLORS[item];
          const [c1, c2, c3] = colors;

          const isActive = active === item;

          const cardBg = isActive ? "bg-cta" : "bg-card";
          const textColor = isActive ? "text-cta-text" : "text-foreground/80";

          return (
            <Pressable
              onPress={() => Uniwind.setTheme(item)}
              className={`w-44 rounded-3xl px-4 py-4 ${cardBg}`}
            >
              {/* 3 COLOR BARS */}
              <View className="mb-3 flex-row items-center gap-2">
                <View className={`h-7 w-1 rounded-full ${c1}`} />
                <View className={`h-7 w-1 rounded-full ${c2}`} />
                <View className={`h-7 w-1 rounded-full ${c3}`} />
              </View>

              {/* THEME NAME */}
              <Text className={`text-sm font-semibold capitalize ${textColor}`}>
                {item}
              </Text>

              {/* DESCRIPTION (optional: style-based auto desc) */}
              <Text className={`text-base font-bold ${textColor}`}>
                {getThemeDescription(item)}
              </Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

// Optional: automatic descriptions
function getThemeDescription(theme: Option): string {
  switch (theme) {
    case "light":
      return "Clean & bright";
    case "dark":
      return "Night mode";
    case "og":
      return "Earthy tone";
    case "blue":
      return "Cool palette";
    case "navy":
      return "Deep ocean";
    case "red":
      return "Bold energy";
    case "orange":
      return "Warm vibes";
    case "rosy":
      return "Soft pastel";
    default:
      return "";
  }
}
