import "../global.css";
import { Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />

      {/* Bu yer orqali barcha sahifalar SafeArea ichida ishlaydi */}
      <Slot />
    </SafeAreaProvider>
  );
}
