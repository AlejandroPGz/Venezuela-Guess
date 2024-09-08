import { View, Text, TouchableOpacity, Linking, ToastAndroid, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router';
import { UserContext } from '@/context/userContext';
import { useNetInfo } from "@react-native-community/netinfo";
const flag2 = require("../../assets/images/flag2.png");

export default function Home() {

  const router = useRouter();
  // const { user } = useContext(UserContext);

    const { isInternetReachable } = useNetInfo();
  
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
        <Text 
        onPress={() => Linking.openURL('https://github.com/AlejandroPGz').catch((err) => {
          ToastAndroid.show("Failed to open URL", ToastAndroid.LONG)
        })}
        className="text-lg font-medium text-cloudy-900 underline decoration-cloudy-900 decoration-solid focus:text-cloudy-400">Alejandro Paradiso Dev</Text>
        <Text 
        onPress={() => Linking.openURL('https://portfolio-56oc.onrender.com').catch((err) => {
          ToastAndroid.show("Failed to open URL", ToastAndroid.LONG)
        })}
        className="text-lg font-medium text-cloudy-800">Portafolio</Text>
      </View>
    </SafeAreaView>
  )
}