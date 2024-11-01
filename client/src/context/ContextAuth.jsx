import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const ContextAuth = ( {children} ) => {
    const [user, setUser] = useState(null)
    
    const login = () =>{
        
    }
    const logout = () =>{

    }
        return (
            <AuthContext.Provider
            value={{
                user,
                setUser,
                login,
                logout,
            }}>
                {children}
            </AuthContext.Provider>
    
)
}
