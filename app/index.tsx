import { Login } from "../components/Login";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { auth } from "../configs/FirebaseConfig";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    console.log("comprobando");
  } else {
    console.log("comprobado");
    console.log(auth.currentUser?.email);
  };

  return (
    <SafeAreaProvider>
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
    </SafeAreaProvider>
  );
}