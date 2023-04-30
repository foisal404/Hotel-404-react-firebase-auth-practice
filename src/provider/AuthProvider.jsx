import React, { createContext } from 'react';

export const authContext=createContext(null);

const AuthProvider = ({children}) => {
    const value={
        data:true
    }
    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;