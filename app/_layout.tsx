import { StatesProvider } from "@/context/countriesContext";
import { MyProvider } from "@/context/userContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
    <MyProvider>
    <StatesProvider>
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="index" />
      <Stack.Screen name="wiki" />
    </Stack>
    </StatesProvider>
    </MyProvider>
    </>
  );
}
