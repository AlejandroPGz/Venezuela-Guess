import { Login } from "../components/Login";
import { ActivityIndicator, AppState, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Redirect } from "expo-router";
import { useContext, useEffect, useState } from "react";
// import { UserContext } from "@/context/userContext";
import { addEventListener, fetch, useNetInfo } from "@react-native-community/netinfo";
import { NoWifi } from "@/components/NoWifi";

export default function Index() {
  
  // const { user, initializing } = useContext(UserContext);

  const [conected, setConected] = useState();
  const [internet, setInternet] = useState();

  useEffect(() => {
    // Subscribe
      const unsubscribe = addEventListener(state => {
      setConected(state.isConnected);
      setInternet(state.isInternetReachable)
    });
    // Unsubscribe
    unsubscribe(); 
  }, [])

  return (
    <SafeAreaProvider>
      {/* <View className="flex items-center justify-center h-full w-full">
        {initializing? 
        <ActivityIndicator size="large" color="#26252c" />
        :
        user?
          <Redirect href={'/home'}></Redirect>  
          :
          <Login/>   
      }
      </View> */}
    {conected&&!internet?
      <NoWifi />    
      :
      <Redirect href={'/home'}></Redirect>  
    }
    </SafeAreaProvider>
  );
}