import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useGlobalSearchParams, Link, Redirect } from 'expo-router';
import { StatesContext } from "@/context/countriesContext";
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSortStates } from "../../../hooks/useSortStates";
import Countdown from "@/components/game/countdown";
import { Game } from "@/components/game/game";

export default function GuessState() {
  //params and context
  const glob = useLocalSearchParams();
  const { states, initializing } = useContext(StatesContext);    
  //states
  // const [startTime, setStartTime] = useState(false)
  const [finished, setFinished] = useState(false)
  
  const [currentState, setCurrentState] = useState()

  //hooks
  const { gameArray, isLoading } = useSortStates(states, glob.level);

  //if i want countdown use this
  // useEffect(() => {

  //   if (gameArray && !startTime) {
  //     setStartTime(true);
  //   }

  // }, [gameArray, startTime])  

  //renderizar la foto del primero,
  //renderizar 3 opciones aleatorias y 1 verdadera
  //si es correcta    

  return (
    <SafeAreaView className="bg-cloudy-200 h-full w-full pt-4 p-4">
      {isLoading&&
      <ActivityIndicator className="mt-6" size="large" color="#26252c" />}
      {gameArray?
        <>
        <View className="w-full justify-center items-center">
          {/* <Countdown 
          startTime={startTime}
          setStartTime={setStartTime}
          finished={finished}
          setFinished={setFinished}
          >Ahora se renderiza mi Countdown</Countdown> */}
        </View>
        <Game gameArray={gameArray} allStates={states}></Game>
        </>   
      :
      <Redirect href={'/home'}></Redirect> 
    }
    </SafeAreaView>
  );
}