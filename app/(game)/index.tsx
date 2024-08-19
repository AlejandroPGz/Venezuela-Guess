import GuessCapitalBtn from "@/components/game/guessCapitalBtn";
import GuessStateBtn from "@/components/game/guessStateBtn";
import Modal from "@/components/Modal";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Index() {
    const [isModalOpen1, setIsModalOpen1] = useState(false)
    const [isModalOpen2, setIsModalOpen2] = useState(false)
    const router = useRouter();

  return (
      <>
    <SafeAreaView className="bg-cloudy-200 h-full w-full pt-4">
      <View className="text-center w-full justify-center items-center h-1/4 ">
        <Text className="text-4xl font-semibold text-cloudy-950">Modos de juego</Text>
      </View>
      <ScrollView className="w-full h-3/6 mb-4">
        <View className="w-full h-full p-4 justify-center items-center">
            <View className="w-full p-4 bg-cloudy-300 justify-center items-center rounded-lg">
          <Text className="text-xl text-cloudy-950 font-medium text-center">Adivinar Estados</Text>
          <TouchableOpacity
          onPress={() => router.push("/guess/1?gameMode=name")}
      className="bg-cloudy-500 w-4/5 py-2 px-6 rounded-xl justify-center items-center mt-4"
      >
        <Text className="text-lg text-cloudy-50 font-bold w-full text-center">Nivel 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => router.push("/guess/2?gameMode=name")}
      className="bg-cloudy-500 w-4/5 py-2 px-6 rounded-xl justify-center items-center mt-4"
      >
        <Text className="text-lg text-cloudy-50 font-bold w-full text-center">Nivel 2</Text>
      </TouchableOpacity>
            </View>
            <View className="w-full p-4 bg-cloudy-300 justify-center items-center rounded-lg mt-4">
          <Text className="text-xl font-medium text-center">Adivinar Capitales</Text>
          <TouchableOpacity
          onPress={() => router.push("/guess/1?gameMode=capital")}
      className="bg-cloudy-100 border border-cloudy-600 w-4/5 py-2 px-6 rounded-xl justify-center items-center mt-4"
      >
        <Text className="text-lg font-bold w-full text-center">Nivel 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => router.push("/guess/2?gameMode=capital")}
      className="bg-cloudy-100 border border-cloudy-600 w-4/5 py-2 px-6 rounded-xl justify-center items-center mt-4"
      >
        <Text className="text-lg font-bold w-full text-center">Nivel 2</Text>
      </TouchableOpacity>
            </View>
        {/* <TouchableOpacity 
        onPress={()=> setIsModalOpen1(true)}
        className="w-3/5 justify-center items-center bg-cloudy-700 rounded-2xl py-4 p-5 shadow-cloudy-950 shadow-xl">
          <Text className="text-xl text-center text-cloudy-50 font-bold">Adivinar Estados</Text>
        </TouchableOpacity> */}
        {/* <Modal isOpen={isModalOpen1}>
            <GuessStateBtn closeModal={()=>setIsModalOpen1(false)}></GuessStateBtn>
        </Modal> */}
        {/* <TouchableOpacity
        onPress={()=> setIsModalOpen2(true)}
        className="w-3/5 justify-center items-center mt-6 rounded-2xl border-2 border-cloudy-600 py-4 p-5">
          <Text className="text-xl text-cloudy-950 font-bold text-center">Adivinar Capitales</Text>
        </TouchableOpacity>
        <Modal isOpen={isModalOpen2}>
          <GuessCapitalBtn closeModal={()=>setIsModalOpen2(false)}>
          </GuessCapitalBtn>
        </Modal> */}
        </View>
      </ScrollView>
      {/* <View className="h-1/4 p-4">
      <Text className="text-xl text-center font-medium  text-cloudy-900">Tendrás que adivinar 12 capitales/estados</Text>
      </View> */}
    </SafeAreaView>
      </>
  );
}