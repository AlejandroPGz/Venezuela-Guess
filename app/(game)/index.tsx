import { ActivityIndicator, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Index() {
    
  return (
      <>
    <SafeAreaView className="bg-cloudy-200 h-full w-full pt-4">
      <View className="text-center text-cloudy-950 w-full justify-center items-center h-1/4">
        <Text className="text-4xl font-semibold ">Modos de juego</Text>
      </View>
      <View className="w-full p-4 justify-center items-center">
        <TouchableOpacity className="w-3/5 justify-center items-center bg-cloudy-700 rounded-2xl py-4 p-5 shadow-cloudy-950 shadow-xl">
          <Text className="text-xl text-cloudy-50 font-bold">Adivinar Estados</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-3/5 justify-center items-center bg-cloudy-50 mt-6 rounded-2xl py-4 border p-5 shadow-cloudy-950 shadow-xl">
          <Text className="text-xl text-cloudy-950 font-bold">Adivinar Capitales</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-3 p-4">
      <Text className="text-xl text-center font-medium  text-cloudy-900">Tendrás que conseguir los 12 puntos adivinando según su capital/estado en 1 minuto</Text>

      </View>
    </SafeAreaView>
      </>
  );
}