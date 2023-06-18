/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

 import React, { createContext, useEffect, useState } from 'react';
 import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import app from '../firebase/firebase.config';
 
 export const AuthContext = createContext(null)
const auth = getAuth(app)

 const AuthProviders = ({children}) => {
    const [user , setUser] = useState(null)
    // const user = {displayName:'sagor'}

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email , password)
    }

    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
      const unSubscribe =  onAuthStateChanged(auth , currentUser => {
            console.log("auth state change ", currentUser);
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    },[])

const authInfo = {
    user, createUser , singIn , logOut
}

    return (
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
    );
 };
 
 export default AuthProviders;