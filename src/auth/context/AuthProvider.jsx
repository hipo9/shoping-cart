import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { authFirebase } from '../firebase/config';
import { useEffect, useReducer, useState } from 'react';
import { authReducer } from './authReducer';
const initialState = {
  status: 'checking', 
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useReducer(authReducer, initialState);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(authFirebase, email, password);
  };
  const login = (email, password) => {
    try {
      return signInWithEmailAndPassword(authFirebase, email, password);
    } catch (error) {
      console.log(error.code);
    }
  };
  const logout = () => {
    signOut(authFirebase);
    setLoading(false);
  };

  const loginWithGoogle = async () => {
    try {
      const googleProvide = new GoogleAuthProvider();
      const resuts = await signInWithPopup(authFirebase, googleProvide);
      return resuts;
    } catch (error) {
      console.log(error.message);
    }
  };
  //se ejecutara una vez cuando se carge todos los omponentes
  useEffect(() => {
    //onAuthStateChanged me devuelve un estado cuando me loggeo o cierro sesion
    const unsuscribe = onAuthStateChanged(authFirebase, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsuscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signUp, login, logout, user, loading, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};
