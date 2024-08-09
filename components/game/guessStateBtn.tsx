import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, Redirect, useRouter } from 'expo-router';

export default function GuessStateBtn({closeModal}) {

  const router = useRouter();
  
  return (
    <View className="bg-cloudy-500 rounded-3xl w-full p-4 justify-center items-center">
    <Text className="text-xl font-bold text-cloudy-50">Adivina el estado según su capital</Text>
    <Link
    href={{
      pathname: "guessState/1",
    }}
    onPress={() => {
      closeModal();
    }}
      className="bg-blue-50 w-4/5 py-2 px-6 rounded-2xl justify-center items-center mt-4 flex flex-col"
      >
        <Text className="text-lg font-bold">Nivel 1</Text>
        <Text className="text-lg font-bold">Mejor Tiempo: 44s</Text>
      </Link>
      <TouchableOpacity
      className="bg-blue-50 w-4/5 py-2 px-6 rounded-2xl justify-center items-center mt-4"
      >
        <Text className="text-lg font-bold">Nivel 2</Text>
        <Text className="text-lg font-bold">Mejor Tiempo: 44s</Text>
      </TouchableOpacity>
      <TouchableOpacity
      className="bg-red-300 w-3/5 justify-center items-center text-center py-2 px-6 rounded-2xl mt-4" 
      onPress={() => closeModal()}>
        <Text className="text-lg font-bold">Cerrar</Text>
      </TouchableOpacity>
    </View>
  )
}