import { useEffect, useReducer } from 'react';
import {
  loginWithEmailPass,
  loginWithGoogle,
  logoutFirebase,
  registerUserWithEmailPass,
} from '../../auth/firebase/providers';
import { AUTH_ACTION_TYPES, authReducer } from '../context/authContext';
import { authFirebase } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

const initialState = {
  status: 'not-authenticated',
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
      }, 2000);
      return;
    }
    dispatch({ type: AUTH_ACTION_TYPES.LOGOUT });
  };
  //===================================================
  const startLoginWithEmailPass = async (email, password) => {
    dispatch({ type: AUTH_ACTION_TYPES.CHECKING });
    const resp = await loginWithEmailPass(email, password);

    if (!resp.ok) {
      return dispatch({ type: AUTH_ACTION_TYPES.LOGOUT, payload: resp.errorMessage });
    }
    dispatch({ type: AUTH_ACTION_TYPES.LOGIN, payload: resp });
  };

  //===================================================
  const startLoginWithGoogle = async () => {
    dispatch({ type: AUTH_ACTION_TYPES.CHECKING });

    const resp = await loginWithGoogle();
    if (!resp.ok) return dispatch({ type: AUTH_ACTION_TYPES.LOGOUT });

    dispatch({ type: AUTH_ACTION_TYPES.LOGIN, payload: resp });
  };

  const startLogout = async () => {
    await logoutFirebase();
    dispatch({ type: AUTH_ACTION_TYPES.LOGOUT });
  };
  console.log(user);

  useEffect(() => {
    onAuthStateChanged(authFirebase, async (user) => {
      console.log(user);
      if (!user) return dispatch({ type: AUTH_ACTION_TYPES.LOGOUT });
      dispatch({ type: AUTH_ACTION_TYPES.LOGIN, payload: user });
    });
  }, []);

  return {
    user,
    startCreateUserEmailPass,
    startLoginWithEmailPass,
    startLogout,
    startLoginWithGoogle,
  };
};
