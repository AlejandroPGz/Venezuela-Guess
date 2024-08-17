import { StatesContext } from "@/context/countriesContext";
import { useContext, useEffect, useState } from "react"

export const useSortStates = (level) => {
  
    const { states, initializing } = useContext(StatesContext);
    function SortArray(x, y) {
      return x.name.localeCompare(y.name);
    }
    
    const [hookState, setHookState] = useState({
        gameArray: null,
        isLoading: true,
        errors: null
    })
  
    const parser = async () => {
        if (states) {
          states.sort(SortArray);
            let newArray = [];
            if (Number(level) === 1) {
              for (let i = 0; i < 12; i++) {     
                newArray.push(states[i])             
              };
            } else {              
              for (let i = 11; i < 24; i++) {     
                newArray.push(states[i])
              };
            };
            newArray.sort(() => (Math.random() - 0.5));
            setHookState({
                gameArray: newArray,
                isLoading: false,
                errors: null
              })
          }  
    }

    useEffect( () => {
        parser()
    }, [states])
  

    return {
    ...hookState
  }
}