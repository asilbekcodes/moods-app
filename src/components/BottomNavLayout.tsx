import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BottomNav from "./BottomNav";

export default function BottomNavLayout({ children }: { children: React.ReactNode }) {
  const insets = useSafeAreaInsets();
  const bottomHeight = 70 + insets.bottom;

  return (
    <View className="flex-1 bg-background">
      {/* PAGE CONTENT: bottomnav joyini bo‘sh qoldiramiz */}
      <View style={{ paddingBottom: bottomHeight }} className="flex-1">
        {children}
      </View>

      {/* FIXED BOTTOM NAV */}
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <BottomNav insetBottom={insets.bottom} />
      </View>
    </View>
  );
}
