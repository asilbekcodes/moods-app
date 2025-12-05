import { Image, View, Text, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { MealCard } from "./Cards";
import { useCart } from "./CartContext";

export default function RecipeCard({ meal }: { meal: MealCard }) {
  const router = useRouter();
  const { add, increment, decrement, getQuantity } = useCart();

  const qty = getQuantity(meal.id);

  const goToAbout = () => {
    router.push({
      pathname: "/about",
      params: {
        title: meal.title,
        chef: meal.chef,
                rating: meal.rating,
                duration: meal.duration,
                rank: meal.rank,
                tagLine: meal.tagLine,
                image: meal.image,
            },
    });
  };

  return (
    <Pressable
      onPress={goToAbout}
      className="rounded-4xl bg-card p-4 active:opacity-90"
    >
            {/* IMAGE + RANK BADGE */}
            <View className="relative overflow-hidden rounded-3xl">
                <Image
                    source={{ uri: meal.image }}
                    className="h-48 w-full"
                    resizeMode="cover"
                />

                <View className="absolute right-4 top-4 rounded-full bg-chip px-4 py-1">
                    <Text className="text-sm font-semibold text-chip-text">
                        {meal.rank}
                    </Text>
                </View>
            </View>

            {/* CHEF, TITLE, DURATION */}
            <View className="mt-5 flex-row items-center gap-3">
                <View className="h-12 w-12 items-center justify-center rounded-full bg-foreground/10">
                    <Ionicons name="fast-food" size={20} color="#111827" />
                </View>

                <View className="flex-1">
                    <Text className="text-sm font-medium text-foreground/70">
                        By {meal.chef}
                    </Text>

                    <Text className="text-xl font-semibold text-primary">
                        {meal.title}
                    </Text>
                </View>
            </View>

            {/* TAGLINE */}
            <Text className="mt-3 text-base text-foreground/70">{meal.tagLine}</Text>

            {/* DURATION */}
            <View className="mt-4 flex-row items-center gap-2">
                <Ionicons name="star" size={20} color="gold" />
                <Text className="text-base text-foreground/70">{meal.rating}</Text>
                <View className="h-1 w-1 rounded-full bg-foreground/20" />
                <Text className="text-base text-foreground/70">{meal.duration}</Text>
            </View>

      {/* CTA BUTTONS */}
      <View className="mt-6 flex-row items-center gap-3">
        {qty > 0 ? (
          <View className="flex-1 flex-row items-center justify-between rounded-full bg-cta py-3 px-4">
            <Pressable
              onPress={(e) => {
                e.stopPropagation?.();
                decrement(meal.id);
              }}
              className="h-10 w-10 items-center justify-center rounded-full bg-cta-text/20"
            >
              <Ionicons name="remove" size={22} color="#234823" />
            </Pressable>
            <Text className="text-lg font-semibold text-cta-text">{qty}</Text>
            <Pressable
              onPress={(e) => {
                e.stopPropagation?.();
                increment(meal.id);
              }}
              className="h-10 w-10 items-center justify-center rounded-full bg-cta-text/20"
            >
              <Ionicons name="add" size={22} color="#234823" />
            </Pressable>
          </View>
        ) : (
          <Pressable
            className="flex-1 rounded-full bg-cta py-4"
            onPress={(e) => {
              e.stopPropagation?.();
              add(meal);
            }}
          >
            <Text className="text-center text-xl font-semibold text-cta-text">
              Add to cart
            </Text>
          </Pressable>
        )}

        <Pressable
          onPress={(e) => {
            e.stopPropagation?.();
          }}
          className="h-12 w-12 items-center justify-center rounded-full bg-foreground/10"
        >
          <Ionicons name="bookmark-outline" size={22} color="#234823" />
        </Pressable>
      </View>
    </Pressable>
  );
}
