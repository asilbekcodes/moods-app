import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useCart } from "../components/CartContext";

export default function Basket() {
  const { items, increment, decrement } = useCart();

  const hasItems = items.length > 0;

  return (
    <View className="flex-1 bg-background px-4 pt-4">
      <Text className="text-2xl font-semibold text-primary">Basket</Text>

      {hasItems ? (
        <ScrollView className="mt-4" contentContainerClassName="pb-20">
          {items.map(({ meal, quantity }) => (
            <View
              key={meal.id}
              className="mb-4 flex-row items-center gap-3 rounded-3xl bg-card p-3"
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

              <View className="flex-row items-center gap-2">
                <Pressable
                  onPress={() => decrement(meal.id)}
                  className="h-9 w-9 items-center justify-center rounded-full bg-foreground/10"
                >
                  <Ionicons name="remove" size={20} color="#234823" />
                </Pressable>
                <Text className="w-6 text-center text-base font-semibold text-primary">
                  {quantity}
                </Text>
                <Pressable
                  onPress={() => increment(meal.id)}
                  className="h-9 w-9 items-center justify-center rounded-full bg-foreground/10"
                >
                  <Ionicons name="add" size={20} color="#234823" />
                </Pressable>
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <View className="flex-1 items-center justify-center">
          <Text className="text-lg font-semibold text-primary">Basket is empty</Text>
          <Text className="mt-1 text-base text-foreground/70">
            Add meals to see them here.
          </Text>
        </View>
      )}
    </View>
  );
}
