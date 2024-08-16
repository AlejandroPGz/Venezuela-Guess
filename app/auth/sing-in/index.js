import { View, Text, TextInput, TouchableOpacity, ToastAndroid, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Redirect, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from "../../../configs/FirebaseConfig";
import { signInWithEmailAndPassword } from 'firebase/auth';
import {AsyncStorage} from 'react-native';
import { UserContext } from '@/context/userContext';

import { SafeAreaView } from 'react-native-safe-area-context'

export default function SingIn() {

  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const { user, setUser } = useContext(UserContext);

  const onSingIn = () => {

    if (!email&&!password) {
      ToastAndroid.show("Please", ToastAndroid.LONG)
    }

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    _storeData = async () => {
      try {
        await AsyncStorage.setItem(
          'currentUser:key',
          user,
        );
      } catch (error) {
        // Error saving data
      }
    };
    _storeData();
    if (user) {
      router.push("/")
    }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, errorCode);
    if (errorCode == "auth/invalid-credential") {
      ToastAndroid.show("Invalid", ToastAndroid.LONG)
    }
  });

  }

  const singAnonim = () => {
    setUser(null)
    router.push("/home")
  }

  return (
   <>
    {!user?
       <SafeAreaView className="w-full h-full bg-scarpa-flow-50 px-4 mt-2">
      <ScrollView>
      <Text className="text-4xl font-semibold text-scarpa-flow-950 mt-8">Bienvenido de vuelta</Text>
      <Text className="text-3xl font-medium mt-6 text-scarpa-flow-500">Te extrañamos...</Text>
      <Text className="text-3xl font-medium mt-6 text-scarpa-flow-500">Inicia Sesión</Text>
      <View className="mt-10">
        <Text className="text-xl font-medium">Email</Text>
        <TextInput 
        onChangeText={(value)=> {setEmail(value)}}
        placeholder='YourEmail@example.com' className="border-input rounded-lg py-3 px-4 shadow-xl shadow-black bg-white mt-2"></TextInput>
      </View>
      <View className="mt-4">
        <Text className="text-xl font-medium">Password</Text>
        <TextInput 
        onChangeText={(value)=> {setPassword(value)}}
        secureTextEntry={true}
        placeholder='' 
        className="border-input rounded-lg py-3 px-4 shadow-xl shadow-black bg-white mt-2"></TextInput>
      </View>
      <TouchableOpacity 
      onPress={onSingIn}
      className="w-full bg-scarpa-flow-950 h-16 mt-8 rounded-xl justify-center items-center"> 
        <Text className="text-lg text-scarpa-flow-50 font-extrabold">Sing In</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={singAnonim}
      className="w-full bg-scarpa-flow-50 h-16 mt-8 rounded-xl justify-center items-center border-input"> 
        <Text className="text-lg text-scarpa-flow-950 font-extrabold ">Continuar como invitado</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => router.push("auth/sing-up")}
      className="w-full bg-scarpa-flow-50 h-16 mt-8 rounded-xl justify-center items-center border-input"> 
        <Text className="text-lg text-scarpa-flow-950 font-extrabold ">Create Account</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
    :
    router.push("/home")
    }
    </>
  )
}