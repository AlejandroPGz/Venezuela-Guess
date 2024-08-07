import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function TabLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{headerShown:false,}}>
        <Stack.Screen name='index' />
    </Stack>
    </SafeAreaProvider>
  )
}