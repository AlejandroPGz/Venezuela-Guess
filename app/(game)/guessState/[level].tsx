import { memo, useEffect } from "react";
import { useLocalSearchParams, useGlobalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'
import  Game from "../../../components/game/gameState";

const GuessState = memo(() => {
  //params
  const glob = useLocalSearchParams();  
  
  return (
    <SafeAreaView className="bg-cloudy-200 h-full w-full pt-4 p-4">
        <Game level={glob.level} gameMode="name"></Game>          
    </SafeAreaView>
  );
});

export default memo(GuessState);