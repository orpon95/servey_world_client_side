import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';



export const authContext = createContext(null)
const provider = new GoogleAuthProvider()

const Authprovider = ({ children }) => {

    const auth = getAuth(app)

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // register sign up
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login
    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // google sigin 
    const googlesign = () => {
        return signInWithPopup(auth, provider)
    }
    //    authchange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, presentUser => {
            setUser(presentUser)
            setLoading(false)
        });

        return () => {
            unsubscribe()
        }


    }, [])



    const AuthInfo = {
        user,
        createUser,
        signin,
        logOut,
        googlesign,
        loading
    }
    return (
        <authContext.Provider value={AuthInfo} >
            {children}
        </authContext.Provider>
    );
};

export default Authprovider;