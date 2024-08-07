import { MyProvider } from "@/context/userContext";
import { UserProvider } from "@/context/UserProvider";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <MyProvider>
    <Stack screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="index" />
    </Stack>
    </MyProvider>
  );
}
