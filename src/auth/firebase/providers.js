import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { authFirebase } from '../firebase/config';
import { providersValidation } from '../../utilities/providersValidation';

const googleProvide = new GoogleAuthProvider();
//=================================
export const registerUserWithEmailPass = async (emailUser, password) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      authFirebase,
      emailUser,
      password
    );
    const { displayName, email, photoURL, uid } = resp.user;
    return {
      ok: true,
      uid,
      email,
      photoURL,
      displayName,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: providersValidation(error.code),
    };
  }
};
//=================================
export const loginWithEmailPass = async (emailUser, passwordUser) => {
  try {
    const resp = await signInWithEmailAndPassword(
      authFirebase,
      emailUser,
      passwordUser
    );
    console.log(resp);
    const { uid, email, displayName } = resp.user;
    return {
      ok: true,
      uid,
      email,
      displayName,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

//=================================
export const loginWithGoogle = async () => {
  try {
    const resuts = await signInWithPopup(authFirebase, googleProvide);
    const credentials = GoogleAuthProvider.credentialFromResult(resuts);
    console.log(credentials);

    const { displayName, email, photoURL, uid } = resuts.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(credential);
    console.log(error.message);
    return {
      ok: false,
      errorMessage: error.message,
      codeError: error.code,
    };
  }
};

export const logoutFirebase = async () => {
  const result = await signOut(authFirebase);
  return result;
};
