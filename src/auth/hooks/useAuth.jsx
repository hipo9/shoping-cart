import { useEffect, useReducer } from 'react';

import {
  loginWithEmailPass,
  loginWithGoogle,
  logoutFirebase,
  registerUserWithEmailPass,
} from '../firebase/providers';
import { AUTH_ACTION_TYPES, authReducer } from '../context/authContext';
import { onAuthStateChanged } from 'firebase/auth';
import { authFirebase } from '../firebase/config';
import {
  getLocalStorage,
  saveLocalStorage,
} from '../../utilities/localStorage';

const initialState = {
  status: 'checking', //not-authenticated, authenticate
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const useAuth = () => {
  const [user, dispatch] = useReducer(authReducer, initialState);
  //===================================================
  const startCreateUserEmailPass = async (email = '', password = '') => {
    dispatch({ type: AUTH_ACTION_TYPES.CHECKING });
    const resp = await registerUserWithEmailPass(email, password);
    const { ok, errorMessage } = resp;
    if (!ok) {
      dispatch({ type: AUTH_ACTION_TYPES.LOGOUT, payload: errorMessage });
      setTimeout(() => {
        dispatch({ type: AUTH_ACTION_TYPES.LOGOUT });
      }, 1500);
      return false;
    }
    dispatch({
      type: AUTH_ACTION_TYPES.USER_CREATED,
      payload: 'User created successfuly',
    });
    saveLocalStorage(null, 'user');
    return true;
  };
  //===================================================
  const startLoginWithEmailPass = async (email, password) => {
    dispatch({ type: AUTH_ACTION_TYPES.CHECKING });
    const resp = await loginWithEmailPass(email, password);
    const { ok, errorMessage } = resp;
    if (!ok) {
      dispatch({ type: AUTH_ACTION_TYPES.LOGOUT, payload: errorMessage });
      setTimeout(() => {
        dispatch({ type: AUTH_ACTION_TYPES.LOGOUT });
      }, 1500);
      return;
    }
    dispatch({ type: AUTH_ACTION_TYPES.LOGIN, payload: resp });
    saveLocalStorage(resp.email, 'user');
  };

  //===================================================
  const startLoginWithGoogle = async () => {
    dispatch({ type: AUTH_ACTION_TYPES.CHECKING });
    const resp = await loginWithGoogle();

    if (!resp.ok) {
      return dispatch({
        type: AUTH_ACTION_TYPES.LOGOUT,
        payload: resp.errorMessage,
      });
    }
    dispatch({ type: AUTH_ACTION_TYPES.LOGIN, payload: resp });
    saveLocalStorage(resp.email, 'user');
  };

  const startLogout = async () => {
    dispatch({ type: AUTH_ACTION_TYPES.CHECKING });
    await logoutFirebase();
    dispatch({ type: AUTH_ACTION_TYPES.LOGOUT });
    saveLocalStorage(null, 'user');
  };

  useEffect(() => {
    const isUserLogged = getLocalStorage('user');
    console.log(isUserLogged);
    const unsuscribe = onAuthStateChanged(authFirebase, async (userCurrent) => {
      if (!userCurrent || !isUserLogged) {
        return dispatch({ type: AUTH_ACTION_TYPES.LOGOUT });
      }

      if (isUserLogged) {
        dispatch({ type: AUTH_ACTION_TYPES.LOGIN, payload: userCurrent });
      }
    });

    return () => unsuscribe();
  }, []);

  return {
    user,
    startCreateUserEmailPass,
    startLoginWithEmailPass,
    startLogout,
    startLoginWithGoogle,
  };
};
