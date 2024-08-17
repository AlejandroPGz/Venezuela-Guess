import { useCallback, useEffect, useState } from "react"

export const useGame = (gameArray, states, setGameState, gameState) => {
  
    //console.log(gameState.indexGame);
    

    const gameComprobation =  useCallback(() => {
        if (gameArray) {
            if (!gameState.finished) {
                if (gameState.indexGame < gameArray.length) {
                    let optionsArray = [];
                    states.sort(() => (Math.random() - 0.5));
                    for (let i = 0; i < 3; i++) {
                        if (states[i].name !== gameArray[i].name) {
                            optionsArray.push(states[i].name)                    
                        } else {
                            states.sort(() => (Math.random() - 0.5));
                            i--;
                        };
                    }
                    optionsArray.push(gameArray[gameState.indexGame].name);
                    optionsArray.sort(() => (Math.random() - 0.5));
                          
                    
                        setGameState((prevState) => ({
                            ...prevState,
                            options: optionsArray
                        }))
                       
                }
            } else {
                console.log("Se acabo");
            }
        
        }
    },
    [gameArray, gameState.indexGame])

    useEffect( () => {
        gameComprobation();
    }, [gameComprobation])
  

    return {
    ...gameState
  }
}