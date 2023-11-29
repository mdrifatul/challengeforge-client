import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import useaxiosPublic from "../Hooks/useaxiosPublic";
import auth from './../Firebase/firebase.config';


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider() 

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const axiosPublic = useaxiosPublic();

  const createUser = (email ,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () =>{
    setLoading(true);
    return signOut(auth);
  }
  const signInWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }
  const updateUserProfile = (name, photo) =>{
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }


  useEffect( () =>{
    const unsubscrible = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      if(currentUser){
        const Info = {email: currentUser.email};
        axiosPublic.post('/jwt', Info)
        .then(res => {
          if(res.data?.token) {
            localStorage.setItem('access-token', res.data?.token)
            setLoading(false)
          }
        })
      }else{
        localStorage.removeItem('access-token')
      }
      setLoading(false)
    })
    return () => {
      return unsubscrible;
    }
  },[axiosPublic])

  const authInfo = {
    loading,
    createUser,
    user,
    logIn,
    logOut,
    signInWithGoogle,
    updateUserProfile
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;