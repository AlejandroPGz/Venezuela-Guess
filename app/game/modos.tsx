import { useRouter } from "expo-router";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
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
          onPress={() => router.push("./guess/1?gameMode=name")}
      className="bg-cloudy-500 w-4/5 py-2 px-6 rounded-xl justify-center items-center mt-4"
      >
        <Text className="text-lg text-cloudy-50 font-bold w-full text-center">Nivel 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => router.push("./guess/2?gameMode=name")}
      className="bg-cloudy-500 w-4/5 py-2 px-6 rounded-xl justify-center items-center mt-4"
      >
        <Text className="text-lg text-cloudy-50 font-bold w-full text-center">Nivel 2</Text>
      </TouchableOpacity>
            </View>
            <View className="w-full p-4 bg-cloudy-300 justify-center items-center rounded-lg mt-4">
          <Text className="text-xl font-medium text-center">Adivinar Capitales</Text>
          <TouchableOpacity
          onPress={() => router.push("./guess/1?gameMode=capital")}
      className="bg-cloudy-100 border border-cloudy-600 w-4/5 py-2 px-6 rounded-xl justify-center items-center mt-4"
      >
        <Text className="text-lg font-bold w-full text-center">Nivel 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => router.push("./guess/2?gameMode=capital")}
      className="bg-cloudy-100 border border-cloudy-600 w-4/5 py-2 px-6 rounded-xl justify-center items-center mt-4"
      >
        <Text className="text-lg font-bold w-full text-center">Nivel 2</Text>
      </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
      </>
  );
}