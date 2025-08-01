import React, { createContext, useEffect, useState } from 'react';

export const StatesContext = createContext();

export const StatesProvider = ({ children }) => {
  const [initializing, setInitializing] = useState(true);
  const [states, setStates] = useState();
  
  const getStates = async () => {
      const resp = await fetch("https://venezuela-api.onrender.com/api/states/66ce5bbed42122ec3f636dfb/allStates/venezuela/");
      const data = await resp.json();       
      setStates((prev) => (
        data
      ))
      setInitializing(false);
  }
  
  useEffect(() => {
    getStates()    
  }, []);

    return (
        <StatesContext.Provider value={{ states, setStates, initializing }}>
            {children}
        </StatesContext.Provider>
    );
};
