import React from "react";
import { Pressable, Text, View } from "react-native";
import { usePathname, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const NAV_ITEMS = [
  { label: "Home", path: "/", icon: "home-outline", iconActive: "home" },
  { label: "Basket", path: "/basket", icon: "cart-outline", iconActive: "cart" },
  { label: "Favorite", path: "/favorite", icon: "heart-outline", iconActive: "heart" },
] as const;

export default function BottomNav({ insetBottom }: { insetBottom: number }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <View
      className="border-t border-foreground/10 bg-card"
      style={{
        paddingBottom: insetBottom,
        paddingTop: 10,
      }}
    >
      <View className="flex-row justify-around px-6 py-2">
        {NAV_ITEMS.map((item) => {
          const isActive =
            pathname === item.path || (item.path === "/" && pathname === "/index");

          return (
            <Pressable
              key={item.path}
              onPress={() => router.push(item.path)}
              className="items-center gap-1"
            >
              <Ionicons
                name={isActive ? item.iconActive : item.icon}
                size={24}
                // className={`${isActive ? "text-primary" : "text-foreground/80"}`}
                color={isActive ? "text-primary" : "text-foreground/80"}
              />
              <Text className={`text-xs ${isActive ? "text-primary" : "text-foreground/80"}`}>
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
