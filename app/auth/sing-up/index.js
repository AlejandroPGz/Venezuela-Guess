import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FirebaseConfig";

export default function SingUp() {

  const insets = useSafeAreaInsets();
  const router = useRouter();

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [user, setUser] = useState()

  const onCreateAccount = () => {

    if (!email&&!password&&!user) {
      ToastAndroid.show("Please", ToastAndroid.LONG)
    }

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if (user) router.replace("/home")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
  }


  return (
    
    <View className="w-screen h-screen bg-scarpa-flow-50 px-4" style={{  paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <TouchableOpacity>
        <Ionicons 
        onPress={() => router.push("auth/sing-in")}
        style={{marginTop: 10}} name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
    <Text className="text-4xl font-semibold text-scarpa-flow-950 mt-8">Crear Cuenta</Text>
    <View className="mt-10">
      <Text className="text-xl font-medium">Email</Text>
      <TextInput 
      onChangeText={(value)=> {setEmail(value)}}
      placeholder='YourEmail@example.com' className="border-input rounded-lg py-3 px-4 shadow-xl shadow-black bg-white mt-2"></TextInput>
    </View>
    <View className="mt-4">
      <Text className="text-xl font-medium">Usuario</Text>
      <TextInput 
      onChangeText={(value)=> {setUser(value)}}
      placeholder='usuario' className="border-input rounded-lg py-3 px-4 shadow-xl shadow-black bg-white mt-2"></TextInput>
    </View>
    <View className="mt-4">
      <Text className="text-xl font-medium">Password</Text>
      <TextInput 
      onChangeText={(value)=> {setPassword(value)}}
      secureTextEntry={true}
      placeholder='' 
      className="border-input rounded-lg py-3 px-4 shadow-xl shadow-black bg-white mt-2"></TextInput>
    </View>
    {/* <View className="mt-4">
      <Text className="text-xl font-medium">Confirm Password</Text>
      <TextInput 
      secureTextEntry={true}
      placeholder='' 
      className="border-input rounded-lg py-3 px-4 shadow-xl shadow-black bg-white mt-2"></TextInput>
    </View> */}
    <TouchableOpacity 
    onPress={onCreateAccount}
    className="w-full bg-scarpa-flow-950 h-16 mt-10 rounded-xl justify-center items-center"> 
      <Text className="text-lg text-scarpa-flow-50 font-extrabold">Crear</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => router.push("auth/sing-in")}
    className="mt-10 items-center w-min">
      <Text className="text-lg font-semibold">Already have an account? Sing in</Text>
    </TouchableOpacity>
  </View>
  )
}