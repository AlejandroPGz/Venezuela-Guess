import { Login } from "../components/Login";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { auth } from "../configs/FirebaseConfig";
import { Redirect } from "expo-router";
import { useContext, useEffect, useState } from "react";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { MyProvider, UserContext } from "@/context/userContext";


export default function Index() {
  
  const { user, initializing } = useContext(UserContext);
  
  return (
    <SafeAreaProvider>
      <>
      <View className="flex items-center justify-center h-screen w-screen">
        {initializing? 
        <ActivityIndicator size="large" color="#26252c" />
        :
        user?
          <Redirect href={'/home'}></Redirect>  
          :
          <Login/>   
      }
      </View>
      </>
    </SafeAreaProvider>
  );
}