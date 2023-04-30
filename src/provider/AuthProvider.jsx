import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const authContext=createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser]=useState(null)

    const singUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    const profileUpdate=(name)=>{
        // console.log(auth.currentUser);
        // console.log(name)
        return updateProfile(auth.currentUser,{  

            displayName: `${name}`
        })
    }
    //on state change monitorere
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currenUser)=>{
            setUser(currenUser);
            console.log("on state change");
        })
        return()=> unsubscribe();
    },[])
    const value={
        singUp,
        signIn,
        logOut,
        profileUpdate,
        user
    }
    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;