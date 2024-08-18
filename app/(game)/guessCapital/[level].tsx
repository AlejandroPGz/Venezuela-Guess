import { memo, useEffect } from "react";
import { useLocalSearchParams, useGlobalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'
import GameCapital from "@/components/game/gameCapital";

const GuessCapital = memo(() => {
  //params
  const glob = useLocalSearchParams();  
  
  return (
    <SafeAreaView className="bg-cloudy-200 h-full w-full pt-4 p-4">
        <GameCapital level={glob.level}></GameCapital>          
    </SafeAreaView>
  );
});

export default memo(GuessCapital);