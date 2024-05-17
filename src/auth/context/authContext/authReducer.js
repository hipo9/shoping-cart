export const AUTH_ACTION_TYPES = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  CHECKING: 'CHECKING',
};

export const authReducer = (state, action) => {
  const { type, payload } = action;
  

  switch (type) {
    case AUTH_ACTION_TYPES.LOGIN:
      return {
        ...state,
        status: 'authenticated',
        uid: payload.uid,
        email: payload.email,
        displayName: payload.displayName,
        image: payload.photoURL,
      };
    case AUTH_ACTION_TYPES.LOGOUT:
      return {
        status: 'not-authenticated',
        uid: null,
        email: null,
        displayName: null,
        image: null,
        errorMessage: payload,
      };
    case AUTH_ACTION_TYPES.CHECKING:
      return {
        ...state,
        status: 'checking',
      };
    default:
      return state;
  }
};
