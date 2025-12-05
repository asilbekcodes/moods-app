import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFavorite } from "../components/FavoriteContext";

export default function Favorite() {
  const { favorites, toggle } = useFavorite();
  const router = useRouter();

  const hasFavorites = favorites.length > 0;

  return (
    <View className="flex-1 bg-background px-4 pt-4">
      <Text className="text-2xl font-semibold text-primary">Favorites</Text>

      {hasFavorites ? (
        <ScrollView className="mt-4" contentContainerClassName="pb-20">
          {favorites.map((meal) => (
            <Pressable
              key={meal.id}
              className="mb-4 flex-row items-center gap-3 rounded-3xl bg-card p-3"
              onPress={() =>
                router.push({
                  pathname: "/about",
                  params: { ...meal },
                })
              }
            >
              <Image
                source={{ uri: meal.image }}
                className="h-16 w-16 rounded-2xl"
                resizeMode="cover"
              />

              <View className="flex-1">
                <Text className="text-base font-semibold text-primary">
                  {meal.title}
                </Text>
                <Text className="text-sm text-foreground/60">{meal.tagLine}</Text>
              </View>

              <Pressable
                onPress={(e) => {
                  e.stopPropagation?.();
                  toggle(meal);
                }}
                className="h-9 w-9 items-center justify-center rounded-full bg-foreground/10"
              >
                <Ionicons name="heart" size={20} color="#d45500" />
              </Pressable>
            </Pressable>
          ))}
        </ScrollView>
      ) : (
        <View className="flex-1 items-center justify-center">
          <Text className="text-lg font-semibold text-primary">
            No favorites yet
          </Text>
          <Text className="mt-1 text-base text-foreground/70">
            Tap the heart on a meal to save it.
          </Text>
        </View>
      )}
    </View>
  );
}
