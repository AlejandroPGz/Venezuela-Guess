import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useGlobalSearchParams, Link } from 'expo-router';
import { StatesContext } from "@/context/countriesContext";
import { SafeAreaView } from 'react-native-safe-area-context'

export default function GuessState() {
  const glob = useLocalSearchParams();
  const [level, setLevel] = useState(Number);
  const { states, initializing } = useContext(StatesContext);    
  const [gameArray, setGameArray] = useState([]);

  useEffect(() => {
    let newArray = []
    if (states) {
      if (Number(glob.level) === 1) {
        for (let i = 0; i < 12; i++) {     
          newArray.push(states[i])
           
        }    
        setGameArray(newArray.sort(() => (Math.random() - 0.5))) 
      } else {
        for (let i = 12; i < 24; i++) {     
          newArray.push(states[i])
        }    
        setGameArray(newArray.sort(() => (Math.random() - 0.5))) 
      }  
    }

  }, [states])  
    
  return (
    <SafeAreaView className="bg-cloudy-200 h-full w-full pt-4 p-4">
      {initializing&&
      <ActivityIndicator className="mt-6" size="large" color="#26252c" />}
      {gameArray?
      gameArray.map((state, index) => (
        <Text key={index}>{state.name}</Text>
      ))
      :
      <Text>Hubo un error, intente de nuevo</Text>
    }
    </SafeAreaView>
  );
}