import "../global.css";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomNavLayout from "../components/BottomNavLayout";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <BottomNavLayout>
        <Slot />
      </BottomNavLayout>
    </SafeAreaProvider>
  );
}
