import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from './config';

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleAuthProvider);
    //const credentials = GoogleAuthProvider.credentialFromResult ( result );
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      //use info
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    console.log(error);
    // const errorCode = error.code;
    const errorMessage = error.message;
    //const email = error.customData.email
    //const credential = GoogleAuthProvider.credentialFromError( error );
    return {
      ok: false,
      errorMessage,
    };
  }
};
