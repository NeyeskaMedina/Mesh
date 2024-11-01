import React, { createContext, useContext } from 'react'

export const DataContext = createContext();

export const ContextProvider = ( {children} ) => {

    return (
        <DataContext.Provider
            value={{

            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export const ContextGlobal = () =>{
    return useContext(DataContext);
}

export default ContextGlobal;