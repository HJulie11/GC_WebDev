import axios from 'axios';
import { createContext, useEffect, useState} from 'react';


export const storeContext = createContext<any>({});

const StoreContextProvider = (props : any) => {

    const url = 'http://localhost:4000'
    const [token, setToken] = useState("")

    const contextValue = {
        url, token, setToken
    }

  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  )
}

export default StoreContextProvider;