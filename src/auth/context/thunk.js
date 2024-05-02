import { singInWithGoogle } from '../firebase/providers';
import { AUTH_ACTION_TYPES } from './authReducer';

export const startGoogleSign = () => {
  return async (dispatch) => {
    console.log('b');
    dispatch({ type: AUTH_ACTION_TYPES.CHECKING_CREDENTIALS });

    const result = await singInWithGoogle();
    console.log(result);

    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};
