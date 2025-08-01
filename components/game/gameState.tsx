import { View, Text, TouchableOpacity } from 'react-native'
import React, { memo, useCallback, useContext, useState } from 'react'
import { StatesContext } from '@/context/countriesContext'
import { useSortStates } from '@/hooks/useSortStates'
import { useGame } from '@/hooks/useGameCapital'

import Options from './options'
import Score from './score'
import StateImg from './stateImg'
import FinishMsg from './finishMsg'
import LoaderGame from './loaderGame'

const Game = memo(({level, gameMode}) => {
    //hooks
    const { states, initializing } = useContext(StatesContext);
    const { gameArray, isLoading } = useSortStates(level);
    
    //states;
    const [gameState, setGameState] = useState({
      indexGame: 0,
      currentState: null,
      options: null,
      correct: 0,
      incorrect: 0,
      rightId: null,
      failId: null,
      selected: false,
      gameStarted: false,
      finished: false,
    });

    const handleTouch = useCallback((option, index) => {
      setGameState((prevState) => {
        const isCorrect = option === gameArray[prevState.indexGame][gameMode];
        return {
          ...prevState,
          selected: true,
          correct: isCorrect ? prevState.correct + 1 : prevState.correct,
          incorrect: isCorrect ? prevState.incorrect : prevState.incorrect + 1,
          rightId: isCorrect ? index : null,
          failId: isCorrect ? null : index,
          finished: prevState.indexGame === 11,
        };
      });
  
      setTimeout(() => {
        setGameState((prevState) => ({
          ...prevState,
          indexGame: prevState.indexGame + 1,
          selected: false,
          rightId: null,
          failId: null,
        }));
      }, 1000);
    }, [gameArray]);

  useGame(gameArray, states, setGameState, gameState, gameMode);

  return (
    <>
    {isLoading&&
    <LoaderGame></LoaderGame>
    }
    <>
    {!isLoading&&gameArray&&!gameState.gameStarted&&
    <>
    <View className="h-full w-full justify-center items-center">
    <TouchableOpacity
    className="bg-scarpa-flow-500 py-2 px-4 rounded-full "
    onPress={() => setGameState((prevState) => ({ ...prevState, gameStarted: true }))}>
      <Text className="text-xl font-medium text-scarpa-flow-50">Comenzar</Text>
    </TouchableOpacity>
    </View>
    </>
    }
    </>
    
    {gameState.gameStarted&&!gameState.finished&&
      <View className="h-full w-full justify-center items-center"> 
        <Score correct={gameState.correct} incorrect={gameState.incorrect} index={gameState.indexGame} />
        {gameMode==="capital"&&
        <Text className="text-center font-medium text-lg">{gameArray[gameState.indexGame].name}</Text>
        }
        <StateImg currentState={gameArray[gameState.indexGame]} />
        <Options
         options={gameState.options}
         handleTouch={handleTouch}
         selected={gameState.selected}
         rightId={gameState.rightId}
         failId={gameState.failId}/>
      </View>
    }
    {gameState.finished&&
    <View className="w-full h-full justify-center items-center">
      <FinishMsg level={level} correct={gameState.correct} incorrect={gameState.incorrect} name={gameMode} />
    </View>
    }
    {!isLoading&&!gameArray&&
    <Text>Hubo un error</Text>
    }
   
    </>
  )
})

export default memo(Game);