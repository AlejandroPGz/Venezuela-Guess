import { StatesProvider } from "@/context/countriesContext";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css"

export default function RootLayout() {
  return (
    <>
    <StatesProvider>
      <SafeAreaProvider>
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="wiki" />
    </Stack>
    </SafeAreaProvider>
    </StatesProvider>
    </>
  );
}
