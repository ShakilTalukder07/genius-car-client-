import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
    }

    return (

        <AuthProvider value={authInfo}>
            {children}
        </AuthProvider>
    );
};

export default AuthProvider;