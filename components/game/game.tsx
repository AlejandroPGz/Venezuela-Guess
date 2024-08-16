import { View, Text, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import React, { memo, useCallback, useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatesContext } from '@/context/countriesContext'
import { useSortStates } from '@/hooks/useSortStates'
import { useGame } from '@/hooks/useGame'

import Options from './options'
import Score from './score'
import StateImg from './stateImg'

const Game = memo(({level}) => {
    //hooks
    const { states, initializing } = useContext(StatesContext);
    const { gameArray, isLoading } = useSortStates(states, level);

    //states;
    const [i, setI] = useState(0);
    const [currentState, setCurrentState] = useState();
    const [options, setOptions] = useState();

    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);

    const [rightId, setRightId] = useState();
    const [failId, setFailId] = useState();
    const [selected, setSelected] = useState(false);

    const [gameStarted, setGameStarted] = useState(false);
    const [finished, setFinished] = useState(false);

    const handleTouch = (option, index) => {
        setSelected(true);
        if (i === 11) {
          setFinished(true);
        }
        if (option === gameArray[i].name) {
            setCorrect(correct+1);
            setRightId(index)           
        } else {
            setIncorrect(incorrect+1)
            setFailId(index)
        }
        setTimeout(() => {
          setI(i+1);
            setSelected(false);
            setFailId(undefined);
            setRightId(undefined);
        }, 700);
    }     
    useEffect(() => {
    }, [gameArray, i])
    useGame(gameArray, states, i, setOptions, setCurrentState, finished, correct, incorrect, setFinished);

  return (
    <>
    {isLoading&&
    <ActivityIndicator size="large" color="#26252c" />
    }
    <>
    {!isLoading&&gameArray&&!gameStarted&&
    <>
    <Text>Hay estados</Text>
    <TouchableOpacity
    onPress={() => {
      setGameStarted(true);
    }}>
      <Text>Start</Text>
    </TouchableOpacity>
    </>
    }
    </>
    
    {gameStarted&&!finished&&
      <View className="h-full w-full justify-center items-center"> 
        <Score correct={correct} incorrect={incorrect} />
        <StateImg currentState={gameArray[i]} />
        <Options
         options={options}
         handleTouch={handleTouch}
         selected={selected}
         rightId={rightId}
         failId={failId}/>
      </View>
    }
    {!isLoading&&!gameArray&&
    <Text>Hubo un error</Text>
    }
   
    </>
  )
})

export default memo(Game);