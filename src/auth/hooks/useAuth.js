import { useEffect, useReducer } from 'react';
import { AUTH_ACTION_TYPES, authReducer } from '../context/authReducer';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { authFirebase } from '../firebase/config';

export const useAuth = () => {
  const [state, dispatch] = useReducer(authReducer, {});

  const signUp = (email, password) => {
    const resp = createUserWithEmailAndPassword(authFirebase, email, password);
    return resp;
  };
  const login = (email, password) => {
    dispatch({ type: AUTH_ACTION_TYPES.CHECKING });
    try {
      return signInWithEmailAndPassword(authFirebase, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {
    const result = signOut(authFirebase);

    return result;
  };

  

  const loginWithGoogle = async () => {
    dispatch({ type: AUTH_ACTION_TYPES.CHECKING });
    try {
      const googleProvide = new GoogleAuthProvider();
      const resuts = await signInWithPopup(authFirebase, googleProvide);
      console.log(resuts);
      return resuts;
    } catch (error) {
      console.log(error.message);
    }
  };
  //se ejecutara una vez cuando se carge todos los omponentes
  useEffect(() => {
    //onAuthStateChanged me devuelve un estado cuando me loggeo o cierro sesion

    const unsuscribe = onAuthStateChanged(authFirebase, (currentUser) => {
      if (!currentUser) dispatch({ type: AUTH_ACTION_TYPES.LOGOUT });
      if (currentUser)
        dispatch({ type: AUTH_ACTION_TYPES.LOGIN, payload: currentUser });
    });
    return () => unsuscribe();
  }, []);

  return {
    login,
    logout,
    loginWithGoogle,
    signUp,
    user: state,
  };
};
