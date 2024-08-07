import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserContext } from '@/context/userContext';
import { auth } from '../../configs/FirebaseConfig';
import { signOut } from 'firebase/auth';
import { router } from 'expo-router';

export default function Profile() {

  const { user } = useContext(UserContext);

  const handleSingOut = async () => {
    signOut(auth).then(() => console.log('User signed out!'));
    router.replace("/")
  }

  return (
    <SafeAreaView className="bg-cloudy-200 h-full w-full pt-4">
      <Text>Profile</Text>
      {user && 
      <TouchableOpacity 
      onPress={handleSingOut}
    className="w-full bg-scarpa-flow-950 h-16 mt-10 rounded-xl justify-center items-center"> 
      <Text className="text-lg text-scarpa-flow-50 font-extrabold">Sing Out</Text>
    </TouchableOpacity>

      }
    </SafeAreaView>
  )
}