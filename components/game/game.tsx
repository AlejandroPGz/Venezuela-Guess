import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const flag = require("../../assets/images/flag.png")

export function Game({gameArray, allStates}) {

    const [currentState, setCurrentState] = useState(gameArray[0])
    const [options, setOptions] = useState()

    let i = 0;

    const handleTouch = (option, index) => {
        if (option === currentState.name) {
            console.log("bien");
        } else {
            console.log("se equivoco");
            
        }
    }

    useEffect(() => {
      
        if (i < gameArray.length) {
            setCurrentState(gameArray[i])            
            //crear lista de opciones
            let optionsArray = []
            allStates.sort(() => (Math.random() - 0.5));
            for (let i = 0; i < 3; i++) {
                if (allStates[i].name !== currentState.name) {
                    optionsArray.push(allStates[i].name)                    
                } else i--;
            }
            optionsArray.push(currentState.name)
            optionsArray.sort(() => (Math.random() - 0.5));
            setOptions(optionsArray)         
        } else {
            console.log("no hay mas");
            
        }

        
    }, [currentState])
        
  return (
    <View className="h-full w-full justify-center items-center">
        {currentState&&
        <>
        <View className="w-full h-1/4 justify-center items-center">
            <Image className="h-full w-4/5 ml-4" style={{ resizeMode: 'cover'}} source={flag}></Image>
        </View>
    <View className="mt-6 w-full flex-row flex-wrap rounded-xl justify-center items-center">
     {options&&
     options.map((option, index) => {
        return (
     <TouchableOpacity
     className="bg-cloudy-50 rounded-xl w-2/5 my-2 mx-2 h-20 justify-center items-center flex"
     key={option}
     onPress={() => handleTouch(option, index)}
     >
        <Text className="text-2xl text-center w-full font-medium mx-1">{option}</Text>
     </TouchableOpacity>
        )
     })
     }

        </View>
        </>
        }
    </View>
  )
}