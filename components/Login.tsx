import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from 'expo-router';
const img = require("./../assets/images/imagen1logo.jpg");
import { UserContext } from '../context/userContext';
import { SafeAreaProvider } from "react-native-safe-area-context";

export function Login() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  // paddingTop: insets.top,

  const { user, setUser } = useContext(UserContext);  

  return (
    <SafeAreaProvider className="bg-cloudy-200 h-full w-full">
      <View className="w-full h-full bg-scarpa-flow-100">
      <Image className="h-2/4 w-full" style={{ resizeMode: 'stretch'}} source={img}></Image>
      <View className="bg-scarpa-flow-100 p-4 -mt-12 rounded-t-2xl h-2/4">
        <Text className="font-extrabold text-3xl text-scarpa-flow-950 text-center p-4">Capital Guesseer</Text>
        <Text className="font-medium text-xl text-center text-scarpa-flow-600">
          ¿Estás listo para poner a prueba tus conocimientos geográficos?
        </Text>
        <Text className="font-medium text-xl text-center text-scarpa-flow-600 mt-4">¡Diviértete aprendiendo y conviértete en un experto en la geografía venezolana!</Text>
        <TouchableOpacity 
        className="justify-center items-center rounded-full bg-cloudy-950 w-full h-20 mt-5"
        onPress={() => router.push("auth/sing-in")} >
          <Text className="text-2xl text-center text-scarpa-flow-50   font-extrabold ">Empezar</Text>
      </TouchableOpacity>
      </View>
      </View>
    </SafeAreaProvider>
  )
}