import { Login } from "../components/Login";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Redirect } from "expo-router";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";


export default function Index() {
  
  const { user, initializing } = useContext(UserContext);
  
  return (
    <SafeAreaProvider>
      <>
      <View className="flex items-center justify-center h-full w-fulh-full">
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