import React from "react";
import { Text, View } from "react-native";

export default function Basket() {
  return (
    <View className="flex-1 items-center justify-center bg-background px-6">
      <Text className="text-2xl font-semibold text-primary">Basket</Text>
      <Text className="mt-2 text-base text-foreground/70">
        Your items will appear here.
      </Text>
    </View>
  );
}
