import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router';
import { UserContext } from '@/context/userContext';

export default function Home() {

  const router = useRouter();
  // const { user } = useContext(UserContext);
  
  return (
    <SafeAreaView className="bg-cloudy-200 h-full w-full p-2">
      <View className="w-full justify-center items-center h-1/4">
        <Text className="font-semibold text-center text-3xl md:text-4xl" >Bienvenido</Text>
      </View>
      <View className="h-1/4 w-full justify-center items-center px-1">
        <Text className="text-lg md:text-2xl text-center font-medium ">!Puedes acceder a la wiki donde aprenderás sobre cada Estado de Venezuela o empezar a jugar los distintos modos de juego!</Text>
      </View>
      <View className="h-1/4 w-full justify-center items-center mt-4">
        <TouchableOpacity 
        onPress={() => router.push("/(game)")}
        className="w-1/2 bg-cloudy-500 py-4 px-6 rounded-2xl">
        <Text
        className="text-2xl font-bold text-center text-scarpa-flow-50">Jugar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => router.push("/wiki")}
        className="w-1/2 border-2 border-cloudy-600 py-4 px-6 rounded-2xl mt-4">
        <Text   
        className="text-2xl font-bold text-center text-cloudy-600">Wiki</Text>
        </TouchableOpacity>
      </View>
      <View className="w-full h-1/4 justify-center items-center">
        <Text className="text-lg font-medium">Alejandro Paradiso Dev</Text>
        <Text className="text-lg font-medium">Portafolio</Text>
      </View>
    </SafeAreaView>
  )
}