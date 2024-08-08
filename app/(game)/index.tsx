import GuessCapitalBtn from "@/components/game/guessCapitalBtn";
import GuessStateBtn from "@/components/game/guessStateBtn";
import Modal from "@/components/Modal";
import { useState } from "react";
import { ActivityIndicator, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Index() {
    const [isModalOpen1, setIsModalOpen1] = useState(false)
    const [isModalOpen2, setIsModalOpen2] = useState(false)

  return (
      <>
    <SafeAreaView className="bg-cloudy-200 h-full w-full pt-4">
      <View className="text-center text-cloudy-950 w-full justify-center items-center h-1/4 ">
        <Text className="text-4xl font-semibold ">Modos de juego</Text>
      </View>
      <View className="w-full h-3/6  p-4 justify-center items-center">
        <TouchableOpacity 
        onPress={()=> setIsModalOpen1(true)}
        className="w-3/5 justify-center items-center bg-cloudy-700 rounded-2xl py-4 p-5 shadow-cloudy-950 shadow-xl">
          <Text className="text-xl text-cloudy-50 font-bold">Adivinar Estados</Text>
        </TouchableOpacity>
        <Modal isOpen={isModalOpen1}>
            <GuessStateBtn closeModal={()=>setIsModalOpen1(false)}></GuessStateBtn>
        </Modal>
        <TouchableOpacity
        onPress={()=> setIsModalOpen2(true)}
        className="w-3/5 justify-center items-center bg-cloudy-50 mt-6 rounded-2xl py-4 border p-5 shadow-cloudy-950 shadow-xl">
          <Text className="text-xl text-cloudy-950 font-bold">Adivinar Capitales</Text>
        </TouchableOpacity>
        <Modal isOpen={isModalOpen2}>
          <GuessCapitalBtn closeModal={()=>setIsModalOpen2(false)}>
          </GuessCapitalBtn>
        </Modal>
      </View>
      <View className="h-1/4 p-4">
      <Text className="text-xl text-center font-medium  text-cloudy-900">Tendrás que conseguir los 12 puntos adivinando según su capital/estado en 1 minuto</Text>
      </View>
    </SafeAreaView>
      </>
  );
}