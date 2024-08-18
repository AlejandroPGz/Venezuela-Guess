import { useCallback, useEffect, useState } from "react"

export const useGameCapital = (gameArray, states, setGameState, gameState) => {    

    const gameComprobation =  useCallback(() => {
        if (gameArray) {
            if (!gameState.finished) {
                if (gameState.indexGame < gameArray.length) {
                    let optionsArray = [];
                    states.sort(() => (Math.random() - 0.5));
                    for (let i = 0; i < 3; i++) {
                        if (states[i].capital !== gameArray[gameState.indexGame].capital) {
                            optionsArray.push(states[i].capital)                    
                        } else {
                            states.sort(() => (Math.random() - 0.5));
                            i--;
                        };
                    };
                    optionsArray.push(gameArray[gameState.indexGame].capital);
                    optionsArray.sort(() => (Math.random() - 0.5));                   
                        setGameState((prevState) => ({
                            ...prevState,
                            options: optionsArray
                        }));
                };
            };
        };
    },
    [gameArray, gameState.indexGame]);

    useEffect( () => {
        gameComprobation();
    }, [gameComprobation]);
  

    return {
    ...gameState
  }
}