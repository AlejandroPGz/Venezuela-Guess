import { auth } from '@/configs/FirebaseConfig';
import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const MyProvider = ({ children }) => {
      // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

    return (
        <UserContext.Provider value={{ user, setUser, initializing }}>
            {children}
        </UserContext.Provider>
    );
};
