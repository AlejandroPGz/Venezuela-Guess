import { Login } from "../components/Login";
import { ActivityIndicator, AppState, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Redirect } from "expo-router";
import { useContext, useEffect, useState } from "react";
// import { UserContext } from "@/context/userContext";


export default function Index() {
  
  // const { user, initializing } = useContext(UserContext);

  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      subscription.remove();
    };
  }, []);

  const handleAppStateChange = (nextAppState) => {
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!');
      (
        <Redirect href={"/"}></Redirect>
      )
    } else if (nextAppState === 'background') {
      console.log('App has gone to the background!');
    }
    setAppState(nextAppState);
  };  
  
  return (
    <SafeAreaProvider>
      <>
      <View className="flex items-center justify-center h-full w-full">
        {/* {initializing? 
        <ActivityIndicator size="large" color="#26252c" />
        :
        user?
          <Redirect href={'/home'}></Redirect>  
          :
          <Login/>   
      } */}
      </View>
      <Redirect href={'/home'}></Redirect>  
      </>
    </SafeAreaProvider>
  );
}