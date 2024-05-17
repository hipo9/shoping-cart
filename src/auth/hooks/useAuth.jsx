import { useEffect, useReducer } from 'react';

import {
  loginWithEmailPass,
  loginWithGoogle,
  logoutFirebase,
  registerUserWithEmailPass,
} from '../../auth/firebase/providers';
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
    console.log(resp.errorMessage, resp.ok, resp);
    const { ok, errorMessage } = resp;
    if (!ok) {
      dispatch({ type: AUTH_ACTION_TYPES.LOGOUT, payload: errorMessage });
      setTimeout(() => {
        dispatch({ type: AUTH_ACTION_TYPES.LOGOUT });
        return false;
      }, 1500);
      return false;
    }
    saveLocalStorage(true, 'isNewUser');
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
    saveLocalStorage(false, 'isNewUser');
  };

  //===================================================
  const startLoginWithGoogle = async () => {
    dispatch({ type: AUTH_ACTION_TYPES.CHECKING });
    const results = await loginWithGoogle();

    if (!results.ok) {
      console.log(results);
      return dispatch({
        type: AUTH_ACTION_TYPES.LOGOUT,
        payload: results.errorMessage,
      });
    }
    dispatch({ type: AUTH_ACTION_TYPES.LOGIN, payload: results });
    saveLocalStorage(false, 'isNewUser');
  };

  const startLogout = async () => {
    dispatch({ type: AUTH_ACTION_TYPES.CHECKING });
    await logoutFirebase();
    dispatch({ type: AUTH_ACTION_TYPES.LOGOUT });
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(authFirebase, async (userCurrent) => {
      if (!userCurrent || getLocalStorage('isNewUser')) {
        return dispatch({ type: AUTH_ACTION_TYPES.LOGOUT });
      }
      if (!getLocalStorage('isNewUser')) {
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
