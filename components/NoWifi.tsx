import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export function NoWifi() {
  const router = useRouter();

  return (
    <SafeAreaView className="h-full w-full">
      <View className="w-full h-full bg-cloudy-300 justify-center items-center">
      <FontAwesome6 name="wifi" size={40} color="black" />
      <Text className="text-center text-lg font-medium text-cloudy-950 mt-4 p-4">Por favor, verifique su conexión a internet para poder jugar</Text>
      </View>
    </SafeAreaView>
  )
}