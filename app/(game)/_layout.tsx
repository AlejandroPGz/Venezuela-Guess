import React, { useContext, useEffect } from 'react'
import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatesContext } from '@/context/countriesContext';
export default function TabLayout() {
  
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{headerShown:false,}}>
        <Stack.Screen name='index' />
        <Stack.Screen
        name="guess/[level]"/>
    </Stack>
    </SafeAreaProvider>
  )
}