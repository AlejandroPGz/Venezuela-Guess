import { useCallback, useEffect } from "react"

export const useGame = (gameArray, states, setGameState, gameState, gameMode) => {    

    const gameComprobation =  useCallback(() => {
        if (gameArray) {
            if (!gameState.finished) {
                if (gameState.indexGame < gameArray.length) {
                    let optionsArray = [];
                    
                    states.sort(() => (Math.random() - 0.5));
                    for (let i = 0; i < 3; i++) {
                        if (states[i][gameMode] !== gameArray[gameState.indexGame][gameMode]) {
                            optionsArray.push(states[i][gameMode])                    
                        } else {
                            states.sort(() => (Math.random() - 0.5));
                            i--;
                        };
                    };
                    optionsArray.push(gameArray[gameState.indexGame][gameMode]);
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