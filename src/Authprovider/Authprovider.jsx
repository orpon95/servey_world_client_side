import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import useAxiospublic from '../components/Hooks/useAxiospublic';



export const authContext = createContext(null)

const Authprovider = ({ children }) => {

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const axiosPublic = useAxiospublic()


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
            if(presentUser){
                // todo
                const userInfo = {email: presentUser.email}
                axiosPublic.post("/api/v1/jwt",userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem("access_token",res.data.token)
                    }
                })

            }
            else{
                // tofdo
                localStorage.removeItem("access_token")

            }
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