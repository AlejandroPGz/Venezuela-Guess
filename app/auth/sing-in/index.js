import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SingIn() {

  const insets = useSafeAreaInsets();

  return (
    <View className="w-screen h-screen bg-scarpa-flow-50 px-4 justify-center" style={{  paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text className="text-4xl font-semibold text-scarpa-flow-950">Bienvenido de vuelta</Text>
      <Text className="text-3xl font-medium mt-6 text-scarpa-flow-500">Te extrañamos...</Text>
      <Text className="text-3xl font-medium mt-6 text-scarpa-flow-500">Inicia Sesión</Text>
      <View className="mt-10">
        <Text className="text-xl font-medium">Email</Text>
        <TextInput placeholder='YourEmail@example.com' className="border-input rounded-lg py-3 px-4 shadow-xl shadow-black bg-white mt-2"></TextInput>
      </View>
      <View className="mt-4">
        <Text className="text-xl font-medium">Password</Text>
        <TextInput 
        secureTextEntry={true}
        placeholder='' 
        className="border-input rounded-lg py-3 px-4 shadow-xl shadow-black bg-white mt-2"></TextInput>
      </View>

      <View className="w-full bg-scarpa-flow-950 h-16 mt-10 rounded-xl justify-center items-center"> 
        <Text className="text-lg text-scarpa-flow-50 font-extrabold">Sing In</Text>
      </View>
      <View className="w-full bg-scarpa-flow-50 h-16 mt-10 rounded-xl justify-center items-center border-input"> 
        <Text className="text-lg text-scarpa-flow-950 font-extrabold ">Create Account</Text>
      </View>
    </View>
  )
}