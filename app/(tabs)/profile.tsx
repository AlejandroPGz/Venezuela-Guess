import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserContext } from '@/context/userContext';
import { auth } from '../../configs/FirebaseConfig';
import { signOut } from 'firebase/auth';
import { router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Profile() {

  const { user } = useContext(UserContext);

  const handleSingOut = async () => {
    signOut(auth).then(() => console.log('User signed out!'));
    router.replace("/")
  }

  return (
    <SafeAreaView className="bg-cloudy-200 h-full w-full pt-4">
      <View className="justify-center items-center w-full mt-4 p-2">
      <FontAwesome name="user-circle-o" size={55} color="black" />
      <Text className="mt-4 text-2xl font-medium">{user? user.email:"Invitado"}</Text>  
    </View>
    <View className="w-full justify-center items-center">
      {user ? 
      <TouchableOpacity 
      onPress={handleSingOut}
    className="w-3/5 p-4 bg-scarpa-flow-950 h-16 mt-10 rounded-xl justify-center items-center"> 
      <Text className="text-lg text-scarpa-flow-50 font-extrabold">Sing Out</Text>
    </TouchableOpacity>
      :
      <TouchableOpacity 
      onPress={() => router.push("auth/sing-in")}
    className="w-3/5 p-4 bg-scarpa-flow-950 h-16 mt-10 rounded-xl justify-center items-center"> 
      <Text className="text-lg text-scarpa-flow-50 font-extrabold">Ingresar</Text>
    </TouchableOpacity>

      }
    </View>
    </SafeAreaView>
  )
}