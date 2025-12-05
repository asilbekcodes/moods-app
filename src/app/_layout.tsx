import "../global.css";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomNavLayout from "../components/BottomNavLayout";
import { CartProvider } from "../components/CartContext";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <CartProvider>
        <BottomNavLayout>
          <Slot />
        </BottomNavLayout>
      </CartProvider>
    </SafeAreaProvider>
  );
}
