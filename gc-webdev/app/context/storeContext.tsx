import { se } from 'date-fns/locale';
import React, { createContext, useState, useEffect } from 'react';

interface StoreContextProps {
  url: string;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

export const storeContext = createContext<StoreContextProps>({
  url: '',
  token: '',
  setToken: () => {}
});

const StoreContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const url = 'http://localhost:4000';
  const [token, setToken] = useState<string>(localStorage.getItem('token') || '');

  useEffect(() => {
    const localToken = localStorage.getItem('token')
    if (localToken) {
      setToken(localToken);
      console.log('Token found in localStorage:', localToken);
    }
  }, [token]);

  const contextValue = {
    url,
    token,
    setToken
  };

  return (
    <storeContext.Provider value={contextValue}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreContextProvider;