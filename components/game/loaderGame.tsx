import { View, Text, ActivityIndicator } from 'react-native'
import React, { memo } from 'react'

const LoaderGame = () => (
    <View className="h-full w-full justify-center items-center">
    <ActivityIndicator size="large" color="#26252c" />
    <Text className="text-center text-lg mt-6 font-medium text-cloudy-950">Cargando Datos...</Text>
  </View>
  );
export default LoaderGame;