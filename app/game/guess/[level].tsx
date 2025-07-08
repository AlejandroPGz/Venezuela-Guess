import { memo } from "react";
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'
import  Game from "../../../components/game/gameState";

const GuessGame = memo(() => {
  //params
  const glob = useLocalSearchParams();  
  
  return (
    <SafeAreaView className="bg-cloudy-200 h-full w-full pt-4 p-4">
        <Game level={glob.level} gameMode={glob.gameMode}></Game>          
        </SafeAreaView>
  );
});

export default memo(GuessGame);