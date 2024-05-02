export const AUTH_ACTION_TYPES = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  CHECKING_CREDENTIALS: 'CHECKING_CREDENTIALS',
};

export const authReducer = (state, action) => {
  const { type, payload } = action;
  console.log(payload);

  switch (type) {
    case AUTH_ACTION_TYPES.LOGIN:
      return {
        ...state,
        status: 'authenticated',
        uid: payload.uid,
        email: payload.email,
        displayname: payload.displayname,
        photoURL: payload.photoURL,
        errorMessage: null,
      };
    case AUTH_ACTION_TYPES.LOGOUT:
      return {
        ...state,
        status: 'not-authenticated',
        uid: null,
        email: null,
        displayname: null,
        photoURL: null,
        errorMessage: payload.errorMessage,
      };
    case AUTH_ACTION_TYPES.CHECKING_CREDENTIALS:
      return {
        status: 'checking',
      };
    default:
      return state;
  }
};
